import { metaDataType } from '~/types/meta'

const metaData: metaDataType = {
  meta: {
    domain: 'https://yuruppe.co.jp',
    ogpImagePath: '/assets/img/common/ogp.png',
    type: 'website',
    websiteName: 'YURUPPE.inc',
  },
  pages: [
    {
      id: 'index',
      title: 'YURUPPE.inc',
      description: 'これはトップです。',
      path: '/',
    },
    {
      id: 'tsukutta_index',
      title: 'つくったやつ | YURUPPE.inc',
      description: 'これはつくったやつ一覧です。',
      path: '/tsukutta',
    },
    {
      id: 'tsukutta_id',
      title: '',
      description: '',
      path: '',
    },
    {
      id: 'urabanashi_idnex',
      title: 'ウラ話 | YURUPPE.inc',
      description: 'これはウラ話一覧です。',
      path: '/urabanashi',
    },
    {
      id: 'urabanashi_id',
      title: '',
      description: '',
      path: '',
    },
    {
      id: 'contact_index',
      title: 'お問い合わせ | YURUPPE.inc',
      description: 'これはお問い合わせです。',
      path: '/contact',
    },
    {
      id: 'contact_confirm',
      title: '確認 | お問い合わせ | YURUPPE.inc',
      description: 'これはお問い合わせの確認画面です。',
      path: '/contact/confirm',
    },
    {
      id: 'contact_complete',
      title: '完了 | お問い合わせ | YURUPPE.inc',
      description: 'これはお問い合わせの完了画面です。',
      path: '/contact/complete',
    },
    {
      id: 'contact_error',
      title: 'エラー | お問い合わせ | YURUPPE.inc',
      description: 'これはお問い合わせのエラー画面です。',
      path: '/contact/error',
    },
    {
      id: 'member',
      title: 'メンバー | YURUPPE.inc',
      description: 'これはメンバーです。',
      path: '/member',
    },
    {
      id: 'privacy',
      title: 'プライバシーポリシー | YURUPPE.inc',
      description: 'これはプライバシーポリシーです。',
      path: '/privacy',
    },
    {
      id: 'about',
      title: '会社概要 | YURUPPE.inc',
      description: 'これは会社概要です。',
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
