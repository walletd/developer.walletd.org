# WalletD Developer Documentation Website

This repository contains the source code for the developer guide resource located at [WalletD ]
WalletD is a collection of Rust libraries (published as crates) that make interacting with various different cryptocurrency chains easier than existing Rust-based solutions.

WalletD will be compiled into a number of different bindings to allow for non-Rust developers to consume the libraries in their native languages.

This repo contains the core WalletD library that leverages all Rust-based functionality the WalletD framework will offer.

Child crates
WalletD is the core library that encapsulates our child crates. These child crates are as follows:

mnemonic is a hierarchical deterministic (HD) key generator. More information about this crate can be found in the crate documentation. Supports BIP32, BIP39, BIP44, BIP49, BIP84, Monero seeds (25 words (Monero standard) and 14 words (MyMonero legacy seed phrases)).

wallet-cli is a command-line tool used for testing and developing new features, when it is more convenient to do so instead of directly in new crates.

Release cycles
During this stage of development, expect v0.x.x releases to be highly experimental, and likely to undergo massive change.

Once stable, (that is, from v1.x.x) WalletD plan to release new versions of WalletD every TBD weeks.

TBD: Bindings for popular languages will be provided in each tagged release.

Should any users want to build from scratch, instructions for building the various packages are also provided.

The WalletD team adhere to traditional semantic versioning when releasing code. For more information regarding semantic versioning, please refer to the semver specification.

TBD: The authors of WalletD provide upgrade guides for any new major version releases. (eg, v1.0.0 -> v2.0.0) As part of this upgrade guide, users will be made aware of features that may be deprecated in future releases at least one major version prior, to provide sufficient time for users to upgrade as necessary.

TBD: Release cycle. With regards to security patches, the WalletD team will endeavour to backport any security fixes to the last x branches released.

Usage example
// TO DO
You can find this example as well as other example projects in the example directory.

See the crate documentation for additional examples.

Building WalletD yourself
Clone the repository from GitHub Run cargo build

The built bindings can be found in the TBD folder.

TBD: Building just one specific set of bindings.

Safety
This crate uses #![forbid(unsafe_code)] to ensure everything is implemented in 100% safe Rust.

Minimum supported Rust version
** KB Note: Presently, this version is up for discussion

mnemonic's MSRV is 1.60 for all pacakges, unless explicitly specified otherwise on that package's README.

Examples
Once WalletD is ready for release, we endeavour to include examples of how to use it in each project, both in the README and in the various examples folders.

The examples folder contains various examples of how to use this library. The docs also provide lots of code snippets and examples.

Getting Help
If you are experiencing a bug / issue, or would like to propose a feature, we encourage you to open up an issue request detailing whatever you'd like us to look at.

In each repo we also have a number of examples showing how to leverage it. You're also welcome to open a discussion with your question.

Contributing
🎈 Thanks for your help improving the project! We are happy to have you get involved. We have a contributing guide to help you get started with contributions to WalletD projects.

License
Licensed under the Apache license, Version 2.0 or the MIT license, at your option. Files in the project may not be copied, modified, or distributed except according to those terms.

Contribution
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in WalletD (or its child crates) by you, shall be subject to the same license restrictions WalletD adheres to, without any additional terms or conditions.

# Protocol

Protocol is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
cp .env.example .env.local
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Global search

By default this template uses [Algolia DocSearch](https://docsearch.algolia.com) for the global search. DocSearch is free for open-source projects, and you can sign up for an account on their website. Once your DocSearch account is ready, update the following [environment variables](https://nextjs.org/docs/basic-features/environment-variables) in your project with the values provided by Algolia:

```
NEXT_PUBLIC_DOCSEARCH_APP_ID=
NEXT_PUBLIC_DOCSEARCH_API_KEY=
NEXT_PUBLIC_DOCSEARCH_INDEX_NAME=
```

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/) - the official Algolia Autocomplete documentation
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - the official Zustand documentation
