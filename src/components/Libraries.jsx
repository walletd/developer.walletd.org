import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const libraries = [
  {
    href: 'https://docs.rs/walletd/0.1.0/walletd/',
    name: 'walletd',
    description:
      'Main walletD crate that encompasses the functionality of all of the other supporting walletD crates. Facilitates the creation and use of non-custodial multi-currency wallets.',
  },
  {
    href: 'https://docs.rs/walletd_bitcoin/0.1.0/walletd_bitcoin/',
    name: 'walletd_bitcoin',
    description:
      'This library provides a wallet implementation for Bitcoin including the ability create a new wallet or import an existing wallet, check balances, and handle transactions. \
      It supports a heirarchical deterministic (HD) wallet structure and provides the ability to search for previously used addresses associated with the wallet as well as the creation of new addresses. \
      It also facilitates obtaining blockchain information.',
  },
  {
    href: 'https://docs.rs/walletd_coin_core/0.1.0/walletd_coin_core/',
    name: 'walletd_coin_core',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
  },
  {
    href: 'https://docs.rs/walletd_mnemonics_core/0.1.0/walletd_mnemonics_core/',
    name: 'walletd_mnemonics_core',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
  },
  {
    href: 'https://docs.rs/walletd_ethereum/0.1.0/walletd_ethereum/',
    name: 'walletd_ethereum',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
  },

  {
    href: 'https://docs.rs/walletd_hd_key/0.1.0/walletd_hd_key/',
    name: 'walletd_hd_key',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
  },
  {
    href: 'https://docs.rs/walletd_bip39/0.1.0/walletd_bip39/',
    name: 'walletd_bip39',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official Rust Crates
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Learn more
                </Button>
              </p>
            </div>
            {/* <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
