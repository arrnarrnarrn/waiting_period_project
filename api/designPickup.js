const express = require('express')
const app = express()
const designPickList = {
  items: [
    //一冊目
    {
      id: 'NyOIuQEACAAJ',
      volumeInfo: {
        title: 'けっきょく、よはく。',
        subtitle: '余白を活かしたデザインレイアウトの本',
        authors: ['ingectar‐e'],
        publishedDate: '2018-07-30',
        description:
          'デザインは「余白」が9割。カフェ(カフェポスター、レストランのメニュー...)、ビジネス(会社案内パンフレット、プレゼン資料...)、和もの(着物レンタル広告、展覧会ポスター...)、化粧品(雑誌広告、新商品店頭POP...)、季節もの(ハロウィン、クリスマス、バレンタイン...)、ラグジュアリー(分譲マンションチラシ、車のポスター...)、豊富なレイアウト例!誰も教えてくれなかった「余白」デザインがわかる本。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4802611692',
          },
          {
            type: 'ISBN_13',
            identifier: '9784802611695',
          },
        ],
        pageCount: 239,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=NyOIuQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=NyOIuQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=NyOIuQEACAAJ&dq=%E7%B5%90%E5%B1%80%E4%BD%99%E7%99%BD&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%81%91%E3%81%A3%E3%81%8D%E3%82%87%E3%81%8F_%E3%82%88%E3%81%AF%E3%81%8F.html?hl=&id=NyOIuQEACAAJ',
      },
    },
    {
      id: 'F0AdswEACAAJ',
      volumeInfo: {
        title: 'なるほどデザイン',
        subtitle: '目で見て楽しむデザインの本。',
        authors: ['筒井美希'],
        publishedDate: '2015-08-01',
        description:
          '「デザイン=楽しい」を実感できる!デザイナーのあたまの中を豊富なビジュアルでひも解く。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4844365177',
          },
          {
            type: 'ISBN_13',
            identifier: '9784844365174',
          },
        ],
        pageCount: 269,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=F0AdswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=F0AdswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=F0AdswEACAAJ&dq=%E3%81%AA%E3%82%8B%E3%81%BB%E3%81%A9%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%81%AA%E3%82%8B%E3%81%BB%E3%81%A9%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3.html?hl=&id=F0AdswEACAAJ',
      },
    },
    {
      id: 'Gl3YwwEACAAJ',
      volumeInfo: {
        title: 'うっとりあじわいじっくりデザイン',
        authors: ['mmm.'],
        publishedDate: '2019-04-11',
        description:
          '「らしさ」の源はどこにある?デザインを磨くホンモノの観察力。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4844368214',
          },
          {
            type: 'ISBN_13',
            identifier: '9784844368212',
          },
        ],
        pageCount: 191,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Gl3YwwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Gl3YwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=Gl3YwwEACAAJ&dq=%E3%81%AA%E3%82%8B%E3%81%BB%E3%81%A9%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%81%86%E3%81%A3%E3%81%A8%E3%82%8A%E3%81%82%E3%81%98%E3%82%8F%E3%81%84%E3%81%98%E3%81%A3%E3%81%8F%E3%82%8A%E3%83%87.html?hl=&id=Gl3YwwEACAAJ',
      },
    },
    {
      id: 'in4ADQAAQBAJ',
      volumeInfo: {
        title: 'ノンデザイナーズ・デザインブック　［第4版］',
        authors: ['Robin Williams'],
        publisher: 'マイナビ出版',
        publishedDate: '2016-09-20',
        description:
          'デザイナーでない人のための、デザインの定番基本書。待望の第４版！ デザインの「４つの基本原則」。これを知るだけで、あなたのデザインはずっとぐっと、良くなります。プロではなくても、読みやすいデザイン、伝わるプレゼン資料、わかりやすいレイアウトを作りたい。そんなあなたのための、デザインの基本書です。 ●本書の対象読者 仕事で、学習で、「デザイン」や「レイアウト」をしなければならない場面は、多々あります。本書は、プロではないし、デザインの学習に割ける時間はあまりないものの、自分の作るページや制作物を見栄え良くする方法を知りたい、という人のための本です。 ●本書の特徴 1.デザインの「4つの基本原則」がわかる 近接、整列、反復、コントラスト……デザインの4つの基本原則として知られるこれらを最初に提示したのは本書です。良い例、悪い例を挙げて、具体的に原則を解説していきます。 2.作例を多数解説 基本原則を適用して、名刺、チラシ、パンフレット、広告などをデザインする際のテクニックを解説しています。考え方だけでなく、どのように原則を使っていけば良いかが、よくわかるでしょう。 3.活字を用いたデザインを解説 文字および活字は、デザインにおいて大きな役割を担っています。コミュニケーションを強化するための、タイポグラフィの基本からアレンジまで、解説します。 4.日本語版での追加項目 日本語版での追加項目として、日本語を使ったデザインでの「4つの基本原則」の適用方法を、名刺、フライヤー、ウェブなどの作例を用いて解説しています。 『この本がデザイン学校の4年間の代わりになる、と言うつもりはありません。また、この小さな本を読めば、自動的に優れたデザイナーになれる、と言うつもりもありません。しかし、あなたがページを見る目は確実に変わるでしょう。この本の基本原則に従えば、あなたの作品が、もっとプロらしく、組織化され、一体化され、おもしろくなることを保証します。』（著者「まえがき」より） 第1版発売から18年ずっと売れ続けているロングセラー、待望の【第4版】の登場です。',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784839955557',
          },
          {
            type: 'ISBN_10',
            identifier: '4839955557',
          },
        ],
        pageCount: 260,
        categories: ['Technology & Engineering'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=in4ADQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=in4ADQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=in4ADQAAQBAJ&dq=%E3%81%AA%E3%82%8B%E3%81%BB%E3%81%A9%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%8E%E3%83%B3%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC%E3%82%BA_%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%96.html?hl=&id=in4ADQAAQBAJ',
      },
    },
    {
      id: 'sgv8AwAAQBAJ',
      volumeInfo: {
        title: '伝わるデザインの基本　よい資料を作るためのレイアウトのルール',
        authors: ['高橋佑磨', '片山なつ'],
        publisher: '株式会社 技術評論社',
        publishedDate: '2014-07-10',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784774166506',
          },
          {
            type: 'ISBN_10',
            identifier: '4774166502',
          },
        ],
        categories: ['Computers'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=sgv8AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=sgv8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=sgv8AwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=sgv8AwAAQBAJ',
      },
    },
    {
      id: 'tZbEncHuOiMC',
      volumeInfo: {
        title: '人とロボットの〈間〉をデザインする',
        authors: ['山田誠二'],
        publisher: '東京電機大学出版局',
        publishedDate: '2007-12',
        description: '心理学などの知見も取り込んで解説.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4501543809',
          },
          {
            type: 'ISBN_13',
            identifier: '9784501543808',
          },
        ],
        pageCount: 298,
        categories: ['Artificial intelligence'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=tZbEncHuOiMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=tZbEncHuOiMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=tZbEncHuOiMC&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E4%BA%BA%E3%81%A8%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%81%AE_%E9%96%93_%E3%82%92%E3%83%87%E3%82%B6%E3%82%A4.html?hl=&id=tZbEncHuOiMC',
      },
    },
    {
      id: 'OQBUSevvTocC',
      volumeInfo: {
        title: 'ユニバーサルデザイン',
        subtitle: '超高齢社会に向けたモノづくり',
        authors: ['ユニバーサルデザイン研究会'],
        publisher: 'JAPAN INDUSTRIAL PUBLISHING',
        publishedDate: '2003-09-10',
        description:
          '生活共用品、家電製品、OA・情報機器、住設機器、パッケージなどのユニバーサルデザインの理念がわかる。企業の商品企画設計に携わる方、福祉関係の仕事に携わる方、ユニバーサルデザインについて研究・開発する仕事に就きたい学生の方々の必読書。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4819015060',
          },
          {
            type: 'ISBN_13',
            identifier: '9784819015066',
          },
        ],
        pageCount: 299,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=OQBUSevvTocC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=OQBUSevvTocC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=OQBUSevvTocC&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3.html?hl=&id=OQBUSevvTocC',
      },
    },
    {
      id: '-BI6_Ec2KnoC',
      volumeInfo: {
        title: '人間工学とユニバーサルデザイン',
        subtitle: 'ユーザビリティ・アクセシビリティ中心・ものづくりマニュアル',
        authors: ['ユニバーサルデザイン研究会'],
        publisher: 'JAPAN INDUSTRIAL PUBLISHING',
        publishedDate: '2008-03',
        description:
          'あらゆるものづくりの場面で求められるユーザビリティ・アクセシビリティの実際がわかる!共用品、家電製品、情報機器、住宅、自動車、包装・容器、文章系のユニバーサルデザイン情報と関連法規など網羅。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4819020048',
          },
          {
            type: 'ISBN_13',
            identifier: '9784819020046',
          },
        ],
        pageCount: 341,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=-BI6_Ec2KnoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=-BI6_Ec2KnoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=-BI6_Ec2KnoC&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E4%BA%BA%E9%96%93%E5%B7%A5%E5%AD%A6%E3%81%A8%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%87%E3%82%B6.html?hl=&id=-BI6_Ec2KnoC',
      },
    },
    {
      id: 'GqaaXHKBVyEC',
      volumeInfo: {
        title: '伝わるWeb文章デザイン100の鉄則',
        authors: ['益子貴寛'],
        publisher: '秀和システム',
        publishedDate: '2004-07-10',
        description:
          '本書は「文書の改善こそが最大のアクセスアップ法だ」というコンセプトのもと、文章の基本ルールから効果的なレイアウト法、魅力的な文章の書き方、文章の信頼感を高める方法、文章系コンテンツの書き方、校正の仕方まで、ウェブでの文章表現を実践的・網羅的に解説した本だ。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4798008168',
          },
          {
            type: 'ISBN_13',
            identifier: '9784798008165',
          },
        ],
        pageCount: 231,
        categories: ['Interactive multimedia'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=GqaaXHKBVyEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=GqaaXHKBVyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=GqaaXHKBVyEC&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E4%BC%9D%E3%82%8F%E3%82%8BWeb%E6%96%87%E7%AB%A0%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3100%E3%81%AE%E9%89%84.html?hl=&id=GqaaXHKBVyEC',
      },
    },
    {
      id: '4wpI2Seq2_UC',
      volumeInfo: {
        title: '情報デザイン原論',
        subtitle: '「ものごと」を形にするテンプレート',
        authors: ['ロバートヤコブソン'],
        publisher: '東京電機大学出版局',
        publishedDate: '2004-01',
        description: '現場のデザイナーのプランニングにも最適',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4501536608',
          },
          {
            type: 'ISBN_13',
            identifier: '9784501536602',
          },
        ],
        pageCount: 297,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=4wpI2Seq2_UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=4wpI2Seq2_UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=4wpI2Seq2_UC&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E6%83%85%E5%A0%B1%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%8E%9F%E8%AB%96.html?hl=&id=4wpI2Seq2_UC',
      },
    },
    {
      id: 'Lw7jXwAACAAJ',
      volumeInfo: {
        title: 'デザインの授業',
        subtitle: '目で見て学ぶデザインの構成術',
        authors: ['佐藤好彦'],
        publishedDate: '2011-07',
        description:
          '良いデザインは、なぜ良いのだろう。すぐれたデザイン作品の手法、構成要素、文字、配色、レイアウトまでを実践的に解説。自分でデザインを『組み立てる論理』を養うための、『読む』デザイン・トレーニングブック。古今東西、デザインの名作30点を詳細解説。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4844362100',
          },
          {
            type: 'ISBN_13',
            identifier: '9784844362104',
          },
        ],
        pageCount: 157,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Lw7jXwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Lw7jXwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=Lw7jXwAACAAJ&dq=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E6%95%99%E5%AE%A4+%E6%89%8B%E3%82%92%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E6%8E%88%E6%A5%AD.html?hl=&id=Lw7jXwAACAAJ',
      },
    },
    {
      id: 'TCTswgEACAAJ',
      volumeInfo: {
        title: '色から引くすぐに使える配色レシピ',
        subtitle: '基本色・無彩色・金銀色・蛍光色ベストチョイスのヒント!',
        authors: ['南雲治嘉'],
        publishedDate: '2019-03',
        description: '迷わず選べる効果的な配色! 金銀蛍光色の配色例満載!',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4766132904',
          },
          {
            type: 'ISBN_13',
            identifier: '9784766132908',
          },
        ],
        pageCount: 192,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=TCTswgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=TCTswgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=TCTswgEACAAJ&dq=%E9%85%8D%E8%89%B2&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E8%89%B2%E3%81%8B%E3%82%89%E5%BC%95%E3%81%8F%E3%81%99%E3%81%90%E3%81%AB%E4%BD%BF%E3%81%88%E3%82%8B%E9%85%8D%E8%89%B2.html?hl=&id=TCTswgEACAAJ',
      },
    },
    {
      id: 'IenDoAEACAAJ',
      volumeInfo: {
        title: 'すぐに役立つ!配色アレンジBOOK',
        authors: ['久野尚美', 'フォルムス色彩情報研究所'],
        publishedDate: '2014-05',
        description:
          '多彩なテーマに対応した1,086色のオリジナルカラー。オリジナルカラーをベースに展開される125組の配色パレット。動植物、野菜や果実、飲食物、趣味・娯楽、貴金属・宝石、生地・皮革、自然素材、地域、風土・文化、自然・自然現象、伝統、美術様式など15分類の中から、すぐに使える色や配色がみつかる便利なキーワード索引。巻末には、色味が確認できる配色マスクシートの付録付き。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '476612510X',
          },
          {
            type: 'ISBN_13',
            identifier: '9784766125108',
          },
        ],
        pageCount: 304,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=IenDoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=IenDoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=IenDoAEACAAJ&dq=%E9%85%8D%E8%89%B2&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%81%99%E3%81%90%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4_%E9%85%8D%E8%89%B2%E3%82%A2%E3%83%AC%E3%83%B3%E3%82%B8BOO.html?hl=&id=IenDoAEACAAJ',
      },
    },
    {
      id: 'S3F-DQAAQBAJ',
      volumeInfo: {
        title:
          'はじめての花色配色テクニックBOOK：色の与えるイメージ、効果、器との色合わせから基礎理論まで',
        authors: ['坂口美重子'],
        publisher: '誠文堂新光社',
        publishedDate: '2012-12-12',
        description:
          '※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 「色の初心者」にもわかりやすい、色の超入門書！ 色の持つイメージ、効果は、それぞれの色によって異なります。色合わせというとセンスありきなイメージもありますが、ただ感覚的に色をとらえるだけでなく、色が与える効果や色彩基礎理論から理解をしていれば、より効果的な色の組み合わせをすることができるはず！ たとえば同じピンクでも、黄色味のピンクは柔らかく女性的なイメージ、青みが強いピンクはモダンで大人っぽい印象。花に落とし込んで考えると、黄色味のピンクの柔らかさを引き立たせるために、ふんわりとした質感のバラをメインに丸いフォルムにアレンジし可愛さを強調。合わせる葉物もシルバー系で優しげに。青みのピンクは規則正しく花を配置し、シンメトリーで都会的な印象を強調。このような色ごとの印象の違いの解説から、それぞれの色の特性を生かすことのできる花材選びと、フラワーアレンジメントのデザインなど「花ならではの配色テクニック」を具体的に説明します。「色の初心者」にもわかりやすい、色の超入門書！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000041006000100101900209',
          },
        ],
        pageCount: 128,
        categories: ['Crafts & Hobbies'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=S3F-DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=S3F-DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=S3F-DQAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=S3F-DQAAQBAJ',
      },
    },
    {
      id: 'gQ8MAAAAQBAJ',
      volumeInfo: {
        title: '色の事典　色彩の基礎・配色・使い方',
        subtitle: '',
        publisher: '西東社',
        publishedDate: '2013-06-20',
        description:
          '色のしくみ、配色のルール、色がもつ心理的効果など、色のパワーを最大限に引き出す使い方が満載です。 豊富な実例で理解が深まります。色について知りたい方必携の１冊。 ＜目次＞ Introduction Part1 色の基礎知識 色の構造／色の表し方／色の正体 Part2 配色のルール 配色の考え方／色相を基準にした配色／ トーンを基準にした配色／配色の応用テクニック Part3 色の効果 色の心理的効果／色の視覚効果／色の錯視／ 色の見えやすさ Part4 色のイメージ 単色のイメージ／イメージを表現する配色／ 配色のイメージ Part5 生活空間と色 ファッションの色／プロダクトの色／ テーブルコーディネートの色／ブーケの色／ サインの色／広告の色／Webサイトの色／ 住宅インテリアの色／公共の施設の色／ 商業施設の色 ＜電子書籍について＞ ※本電子書籍は同じ書名の出版物を底本とし電子書籍化したものです。 ※本文に記載されている内容は、印刷出版当時の情報に基づき作成されたのものです。 ※印刷出版を電子書籍化するにあたり、電子書籍としては不要な情報を含んでいる場合があります。また、印刷出版とは異なる表記・表現の場合があります。 株式会社西東社／seitosha',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784791685509',
          },
          {
            type: 'ISBN_10',
            identifier: '4791685504',
          },
        ],
        pageCount: 224,
        categories: ['House & Home'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=gQ8MAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=gQ8MAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=gQ8MAAAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=gQ8MAAAAQBAJ',
      },
    },
    {
      id: 'bqPDjwEACAAJ',
      volumeInfo: {
        title: 'ロゴデザインの現場',
        subtitle: '事例で学ぶデザイン技法としてのブランディング',
        authors: ['佐藤浩二', '田中雄一郎', '小野圭介'],
        publishedDate: '2016-05',
        description:
          'デザイナーの制作領域の多元化はよりいっそう進んでおり、幅広い制作物に対応しつつ、「ブランディングの視点をもってトータルにデザインしていく能力」が求められています。企業やブランドだけでなく、地域、行政、教育、街づくりなどにデザインの力で参加し、貢献していく気鋭デザイナーの制作現場に密着。クライアントへのヒアリング、アイデアスケッチ、ラフ制作、プレゼンテーション、デザインの精緻化、ガイドラインの作成と、すべての工程を詳らかにすることで、デザイナーという職業の実際、そして「デザインの今」に迫ります。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4844365878',
          },
          {
            type: 'ISBN_13',
            identifier: '9784844365877',
          },
        ],
        pageCount: 272,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=bqPDjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=bqPDjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=bqPDjwEACAAJ&dq=%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E7%8F%BE%E5%A0%B4&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E7%8F%BE%E5%A0%B4.html?hl=&id=bqPDjwEACAAJ',
      },
    },
    {
      id: 'SjJ6v79UTl4C',
      volumeInfo: {
        title: 'ロゴデザインのアイデア1000',
        authors: [
          'ヤマダジュンヤ',
          'ハラヒロシ',
          '田中クミコ',
          'ハヤシアキコ',
          '杉江耕平',
        ],
        publisher: '翔泳社',
        publishedDate: '2013-03-25',
        description:
          'デザインの要、ロゴ作りのアイデア集。デザインが楽しくなるネタ帳 ロゴとタイトルロゴデザインの見本帳です。さまざまなロゴデザインの見本が載っているので、デザイナーさんがアイデアに煮詰まったときにおすすめです。信頼感・堅めのビジネス系ロゴ、デザイン性・おしゃれなクリエイティブ系ロゴ、伝統・和・高級路線のコンサバティブ系ロゴ、女性・ソフトなナチュラル系といったテイストごとに分かれており、会社やお店のロゴ、作品のタイトルロゴを作るときに、使えるヒントがいっぱいです。 ※本電子書籍は同名出版物を底本とし作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784798132808',
          },
          {
            type: 'ISBN_10',
            identifier: '4798132802',
          },
        ],
        pageCount: 112,
        categories: ['Technology & Engineering'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=SjJ6v79UTl4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=SjJ6v79UTl4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=SjJ6v79UTl4C&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=SjJ6v79UTl4C',
      },
    },
    {
      id: 'HYujoAEACAAJ',
      volumeInfo: {
        title: '文字のつくりかた',
        subtitle: '“伝わる”文字はどうやって生まれるの?',
        publishedDate: '2014-05-20',
        description:
          'アートディレクターが明かす!オリジナルの文字、ロゴづくりの秘訣とは?',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4568505666',
          },
          {
            type: 'ISBN_13',
            identifier: '9784568505665',
          },
        ],
        pageCount: 105,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=HYujoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=HYujoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=HYujoAEACAAJ&dq=%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E7%8F%BE%E5%A0%B4&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E6%96%87%E5%AD%97%E3%81%AE%E3%81%A4%E3%81%8F%E3%82%8A%E3%81%8B%E3%81%9F.html?hl=&id=HYujoAEACAAJ',
      },
    },
    {
      id: 'hdxhngEACAAJ',
      volumeInfo: {
        title: 'ロゴロジック',
        subtitle: '実例が証すロゴデザイン',
        authors: ['高田雄吉'],
        publishedDate: '2013-11',
        description:
          '実例が証すロゴデザイン、そのカタチにはワケがある。ロゴづくり最短距離、プロの制作現場を公開。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4756244254',
          },
          {
            type: 'ISBN_13',
            identifier: '9784756244253',
          },
        ],
        pageCount: 223,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=hdxhngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=hdxhngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=hdxhngEACAAJ&dq=%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E7%8F%BE%E5%A0%B4&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%AD%E3%82%B4%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF.html?hl=&id=hdxhngEACAAJ',
      },
    },
    {
      id: 'IyswQwAACAAJ',
      volumeInfo: {
        title: 'ロゴデザインのアイデア!',
        subtitle: '実例で学ぶ!!プロのデザインルール&テクニック',
        authors: ['オブスキュアインク'],
        publishedDate: '2010-01',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4862670784',
          },
          {
            type: 'ISBN_13',
            identifier: '9784862670786',
          },
        ],
        pageCount: 143,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=IyswQwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=IyswQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=IyswQwAACAAJ&dq=%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E7%8F%BE%E5%A0%B4&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%AD%E3%82%B4%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2.html?hl=&id=IyswQwAACAAJ',
      },
    },
  ],
}

app.get('/', function (req, res) {
  res.send(designPickList)
})

module.exports = {
  path: '/api/pickup/design',
  handler: app,
}
