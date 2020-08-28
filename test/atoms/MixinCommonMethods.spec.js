import commonMixin from '@/plugins/mixin-common-methods'

export function replacedAmp(url) {
  const replacedURL = url.replace(/&amp;/g, '&')
  return replacedURL
}

export function truncate(str, length) {
  str = String(str)
  return str.length <= length ? str : str.substr(0, length) + '...'
}

describe('truncateMethods', () => {
  test('truncate 10 string', () => {
    expect(truncate('abcdefghi', 10)).toBe('abcdefghi')
    expect(truncate('abcdefghij', 10)).toBe('abcdefghij')
    expect(truncate('abcdefghijk', 10)).toBe('abcdefghij...')
    expect(truncate('一二三四五六七八九', 10)).toBe('一二三四五六七八九')
    expect(truncate('一二三四五六七八九十', 10)).toBe('一二三四五六七八九十')
    expect(truncate('一二三四五六七八九十一', 10)).toBe(
      '一二三四五六七八九十...'
    )
  })

  test('truncate 10 integer', () => {
    expect(truncate(12345678910, 10)).toBe('1234567891...')
    expect(truncate(123456789, 10)).toBe('123456789')
    expect(truncate(1234567891, 10)).toBe('1234567891')
  })
})

describe('replaceAmpMethods', () => {
  test('AmpNotExist', () => {
    expect(replacedAmp('https://waiting-nuxt-book.herokuapp.com/')).toBe(
      'https://waiting-nuxt-book.herokuapp.com/'
    )
  })

  test('&amp;NotExist', () => {
    expect(
      replacedAmp(
        'http://books.google.com/books/content?id=NraODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      )
    ).toBe(
      'http://books.google.com/books/content?id=NraODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    )
  })

  test('&amp;Exist', () => {
    expect(
      replacedAmp(
        'http://books.google.com/books/content?id=NraODwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'
      )
    ).toBe(
      'http://books.google.com/books/content?id=NraODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    )
  })
})
