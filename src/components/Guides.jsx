import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/mnemonics',
    name: 'Mnemonics',
    description: 'Learn how to use mnemonics in walletD.',
  },
  {
    href: '/hd_key',
    name: 'HD Key',
    description: 'Understand how a hierarchical deterministic key works, and how to use it in walletD.',
  },
  {
    href: '/bitcoin_wallet',
    name: 'Bitcoin Wallet',
    description:
      'Learn how to use walletD to implement a Bitcoin wallet.',
  },
  {
    href: '/ethereum_wallet',
    name: 'Ethereum Wallet',
    description:
      'Learn how to use walletD to implement an Ethereum wallet.',
  },
  {
    href: '/walletd_guide',
    name: 'WalletD Overview',
    description:
      'Learn how to use walletD at high level.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
