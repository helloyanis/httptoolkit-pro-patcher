<h1 align="center">THIS SOFTWARE IS CURRENTLY IN THE PROCESS OF BEING MODIFIED TO WORK ON NEWER VERSIONS OF HTTP TOOLKIT, THIS IS CURRENTLY AN ARCHIVE OF A BROKEN VERSION</h1>

<h1 align="center">HTTP Toolkit Pro Patcher</h1>

This is a simple tool to patch HTTP Toolkit to enable the Pro features without a license or subscription. **But please consider supporting the developer by purchasing a license if you find the HTTP Toolkit useful.**

## Usage

1. Clone this repository using `git clone https://github.com/XielQs/httptoolkit-pro-patcher.git`
2. cd into the directory using `cd httptoolkit-pro-patcher`
3. Run `npm install` or whatever package manager you use
4. Run `node . patch` to patch the HTTP Toolkit

That's it! The HTTP Toolkit should now have the Pro features enabled.

***Tip**: You can also run `node . restore` to restore the original HTTP Toolkit.*

**Note**: You may need to run the patcher again after updating the HTTP Toolkit.

## CLI Usage

```sh
Usage: node . <command> [options]

Commands:
  patch    Patch HTTP Toolkit
  restore  Restore HTTP Toolkit
  start    Start HTTP Toolkit with debug logs enabled

Options:
      --version  Show version number                                   [boolean]
  -p, --proxy    Specify a global proxy (only http/https supported)     [string]
  -P, --path     Specify the path to the HTTP Toolkit folder (auto-detected by d
                 efault)                                                [string]
  -h, --help     Show this help message                                [boolean]

You need at least one command before moving on
```

## Using with Proxy

If you want to add a proxy to the patcher, you can set the use the `--proxy` option. For example, `node . patch --proxy http://x.x.x.x:8080`.

You can also set the `PROXY` environment variable to use a proxy. For example, `PROXY=http://x.x.x.x:8080 node . start`.

**Note**: The proxy must be an HTTPS/HTTP proxy. SOCKS proxies are not supported.

**Note**: `Proxy` is only used for the patcher. The HTTP Toolkit itself will not use the proxy, so you will need to configure the HTTP Toolkit to use the proxy if you want to use it.

![HTTP Toolkit Proxy Settings](https://i.imgur.com/Ti2vIgb.png)

## How it works

This tool simply creates a server *(at port 5067)* and acts as like a MITM proxy to intercept and download app files ([app.httptoolkit.tech](https://app.httptoolkit.tech)) and patches the `main.js` file to enable the Pro features. For more detailed information, see the [patch's source code](patch.js) or the [patcher](index.js) file.

***Tip**: You can also change the `PORT` environment variable to use a different port. For example, `PORT=8080 httptoolkit` or `PORT=8080 node . start`.*

**Note**: This tool does not modify the HTTP Toolkit files. It only intercepts and modifies the files in memory (and saves the modified files to cache).

## Requirements

- [Node.js](https://nodejs.org) (v15 or higher) (with npm 7 at least)

## Compatibility

- **Windows**: ✔
- **Linux**: ✔
- **macOS**: ✔

## Known Issues

- **Linux**: Try using `sudo` if you get permission errors
- If you get an error like `No internet connection and file is not cached`, it means the patcher is unable to connect to the internet. Make sure you have an active internet connection and try again. If you are using a proxy, make sure proxy is working well.
- If HTTP Toolkit does not start after patching, try updating your Node.js version to the latest version.
- **macOS**: You may need to enable "App Management" for your terminal emulator in Privacy & Security if you get permission errors.

## Screenshot

![Screenshot](https://i.imgur.com/eAmDmZF.png)
<small>Background: [Doki Theme](https://github.com/doki-theme/doki-theme-vscode)</small>

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This project is for educational purposes only. I do not condone piracy or any illegal activities. Use at your own risk.

## Credits

- [HTTP Toolkit](https://httptoolkit.com) for the awesome app
- [Titoot](https://github.com/Titoot) for the creating the [httptoolkit-interceptor](https://github.com/Titoot/httptoolkit-interceptor)
- [XielQ](https://github.com/XielQs) for the creator of this patcher

## ⭐️ Show Your Support

If you found this project helpful or interesting, please give it a star! 🌟

[![Star History Chart](https://api.star-history.com/svg?repos=IPTVmanreal/httptoolkit-pro-patcher&type=Date)](https://star-history.com/#IPTVmanreal/httptoolkit-pro-patcher&Date)
