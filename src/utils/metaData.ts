import { metaDataType } from '~/types/meta'

const metaData: metaDataType = {
  meta: {
    domain: 'https://yuruppe.co.jp',
    ogpImagePath: '/img/common/ogp.png',
    type: 'website',
    websiteName: 'YURUPPE.inc',
  },
  pages: [
    {
      id: 'index',
      title: 'YURUPPE.inc',
      description:
        'YURUPPE inc.はTimeless & Origin（時代を超えたオリジナリティ性）を持った映像コンテンツを制作するクリエイティブカンパニーです。映像の枠に囚われず、常に実験を繰り返し、映像を拡張し続けます。',
      path: '/',
    },
    {
      id: 'tsukutta_index',
      title: 'つくったもの | YURUPPE.inc',
      description: 'つくったもの一覧をご覧いただけます。',
      path: '/tsukutta',
    },
    {
      id: 'tsukutta_id',
      title: '',
      description: '',
      path: '/tsukutta/',
    },
    {
      id: 'urabanashi_idnex',
      title: 'ウラ話 | YURUPPE.inc',
      description: 'ウラ話一覧をご覧いただけます。',
      path: '/urabanashi',
    },
    {
      id: 'urabanashi_id',
      title: '',
      description: '',
      path: '/urabanashi/',
    },
    {
      id: 'contact_index',
      title: 'お問い合わせ | YURUPPE.inc',
      description: 'YURUPPE.incへのお問い合わせはこちら。',
      path: '/contact',
    },
    {
      id: 'contact_confirm',
      title: '確認 | お問い合わせ | YURUPPE.inc',
      description: 'YURUPPE.incへのお問い合わせはこちら。',
      path: '/contact/confirm',
    },
    {
      id: 'contact_complete',
      title: '完了 | お問い合わせ | YURUPPE.inc',
      description: 'YURUPPE.incへのお問い合わせはこちら。',
      path: '/contact/complete',
    },
    {
      id: 'contact_error',
      title: 'エラー | お問い合わせ | YURUPPE.inc',
      description: 'YURUPPE.incへのお問い合わせはこちら。',
      path: '/contact/error',
    },
    {
      id: 'member',
      title: 'メンバー | YURUPPE.inc',
      description: 'メンバーをご覧いただけます。',
      path: '/member',
    },
    {
      id: 'privacy',
      title: 'プライバシーポリシー | YURUPPE.inc',
      description: 'プライバシーポリシーについて説明します。',
      path: '/privacy',
    },
    {
      id: 'about',
      title: '会社概要 | YURUPPE.inc',
      description: '会社概要を掲載しています。',
      path: '/about',
    },
    {
      id: 'error',
      title: 'エラー | YURUPPE.inc',
      description: 'このページは存在しません。',
      path: '/error',
    },
  ],
}

export { metaData }
