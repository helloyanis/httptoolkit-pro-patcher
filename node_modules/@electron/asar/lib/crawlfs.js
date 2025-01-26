"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineFileType = determineFileType;
exports.crawl = crawl;
const util_1 = require("util");
const glob_1 = require("glob");
const wrapped_fs_1 = __importDefault(require("./wrapped-fs"));
const glob = (0, util_1.promisify)(glob_1.glob);
async function determineFileType(filename) {
    const stat = await wrapped_fs_1.default.lstat(filename);
    if (stat.isFile()) {
        return { type: 'file', stat };
    }
    else if (stat.isDirectory()) {
        return { type: 'directory', stat };
    }
    else if (stat.isSymbolicLink()) {
        return { type: 'link', stat };
    }
    return null;
}
async function crawl(dir, options) {
    const metadata = {};
    const crawled = await glob(dir, options);
    const results = await Promise.all(crawled.map(async (filename) => [filename, await determineFileType(filename)]));
    const links = [];
    const filenames = results
        .map(([filename, type]) => {
        if (type) {
            metadata[filename] = type;
            if (type.type === 'link')
                links.push(filename);
        }
        return filename;
    })
        .filter((filename) => {
        // Newer glob can return files inside symlinked directories, to avoid
        // those appearing in archives we need to manually exclude theme here
        const exactLinkIndex = links.findIndex((link) => filename === link);
        return links.every((link, index) => {
            if (index === exactLinkIndex)
                return true;
            return !filename.startsWith(link);
        });
    });
    return [filenames, metadata];
}
//# sourceMappingURL=crawlfs.js.map