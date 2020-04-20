const express = require('express')
const app = express()
const pickList = {
  items: [
    //一冊目
    {
      kind: 'books#volume',
      id: '6315DwAAQBAJ',
      etag: '9zW3eL7lz9A',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/6315DwAAQBAJ',
      volumeInfo: {
        title: 'おおきく振りかぶって（３０）',
        authors: ['ひぐちアサ'],
        publisher: '講談社',
        publishedDate: '2018-11-22',
        description:
          '県立西浦高校野球部の４市大会初戦の相手は崎玉高校。夏の大会でコールド負けした崎玉は西浦にリベンジを誓っていた！ 徹底的に練られた崎玉の戦略が西浦を翻弄！ 流れは崎玉に傾いた！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000012855103003001900206',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.2.2.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: true,
          containsImageBubbles: true,
          epubBubbleVersion: '9f7a3f6ad32385e1_A',
          imageBubbleVersion: '9f7a3f6ad32385e1_A',
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        previewLink:
          'http://books.google.co.jp/books?id=6315DwAAQBAJ&printsec=frontcover&dq=%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=6315DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=6315DwAAQBAJ',
        seriesInfo: {
          kind: 'books#volume_series_info',
          bookDisplayNumber: '30',
          volumeSeries: [
            {
              seriesId: 'trHXFwAAABBgpM',
              seriesBookType: 'COLLECTED_EDITION',
              orderNumber: 30,
            },
          ],
        },
      },
      saleInfo: {
        country: 'JP',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 660.0,
          currencyCode: 'JPY',
        },
        retailPrice: {
          amount: 660.0,
          currencyCode: 'JPY',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=6315DwAAQBAJ&rdid=book-6315DwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 6.6e8,
              currencyCode: 'JPY',
            },
            retailPrice: {
              amountInMicros: 6.6e8,
              currencyCode: 'JPY',
            },
          },
        ],
      },
      accessInfo: {
        country: 'JP',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6_%EF%BC%93%EF%BC%90-sample-epub.acsm?id=6315DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6_%EF%BC%93%EF%BC%90-sample-pdf.acsm?id=6315DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=6315DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '県立西浦高校野球部の４市大会初戦の相手は崎玉高校。夏の大会でコールド負けした崎玉は西浦にリベンジを誓っていた！ 徹底的に練られた崎玉の戦略が西浦を翻弄！ ...',
      },
    },
    //二冊目
    {
      kind: 'books#volume',
      id: 'OOmdDwAAQBAJ',
      etag: 'kEpOXC2e9CA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/OOmdDwAAQBAJ',
      volumeInfo: {
        title: '後悔しないためのVueコンポーネント設計',
        authors: ['中島 直博'],
        publisher: 'インプレスR&D',
        publishedDate: '2019-06-28',
        description:
          '本書はVue.jsを利用してシングルページアプリケーションの作成を考えているエンジニア、特にコンポーネントの設計や分類に悩んでいる方のためのガイドブックです。テストの書き方がわからない、コンポーネントのアンチパターンを知りたい、といった方のために、テストしやすい、またはしづらいコンポーネントとはなにか、単体テストの書き方などについて丁寧に解説しています。 〈本書の対象読者〉 ・Vue.jsのコンポーネント設計に自身がない ・Vue.jsのコンポーネントの分類で悩んでいる ・Vue.jsのコンポーネントのアンチパターンを知りたい ・Vue.jsのコンポーネントのテストの書き方がわからない 【目次】 第1章 なぜテストを書くのか 1.1 なぜ「私」はテストを書くようになったのか 第2章 テストしやすいコンポーネントと、テストしづらいコンポーネント 2.1 テストしやすい/しづらいコンポーネント 2.2 機能を少なくシンプルに保つ 2.3 依存は少なく 2.4 なるべく状態を持たせない 2.5 propsの型指定で避けたほうがいい型 2.6 親子コンポーネント間のやりとり 2.7 Storeのgettersに注意 2.8 ライフサイクルフックに直接処理を書かない 第3章 コンポーネントを分類する 3.1 コンポーネントの種類を知る 3.2 ２種類で足りる？ 第4章 ディレクトリ構成とコンポーネントの分類 4.1 UIのサンプル 4.2 basicsディレクトリ 4.3 componentsディレクトリ 4.4 containersディレクトリ 4.5 pagesディレクトリ 第5章 なにをテストするか 5.1 テストの対象 5.2 コンポーネントのテスト項目 5.3 Vuexのテスト 5.4 どうやってテストするか 第6章 テスト実行環境の構築 6.1 Vue CLIを使った環境構築 6.2 Vue CLI UIを使う 6.3 テストのサンプル 第7章 テストを書く 7.1 サンプルアプリケーション 7.2 テストの実行方法 7.3 ディレクトリとファイル構成 7.4 Jestの使い方と機能 7.5 vue-test-utils 7.6 basicのテスト 7.7 componentのテスト 7.8 containerのテスト 7.9 pageのテスト',
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Technology & Engineering'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=OOmdDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=OOmdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        previewLink:
          'http://books.google.co.jp/books?id=OOmdDwAAQBAJ&printsec=frontcover&dq=Vue&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=OOmdDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=OOmdDwAAQBAJ',
      },
      saleInfo: {
        country: 'JP',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 1760.0,
          currencyCode: 'JPY',
        },
        retailPrice: {
          amount: 1584.0,
          currencyCode: 'JPY',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=OOmdDwAAQBAJ&rdid=book-OOmdDwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1.76e9,
              currencyCode: 'JPY',
            },
            retailPrice: {
              amountInMicros: 1.584e9,
              currencyCode: 'JPY',
            },
          },
        ],
      },
      accessInfo: {
        country: 'JP',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E5%BE%8C%E6%82%94%E3%81%97%E3%81%AA%E3%81%84%E3%81%9F%E3%82%81%E3%81%AEVue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC-sample-epub.acsm?id=OOmdDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E5%BE%8C%E6%82%94%E3%81%97%E3%81%AA%E3%81%84%E3%81%9F%E3%82%81%E3%81%AEVue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC-sample-pdf.acsm?id=OOmdDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=OOmdDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '本書はVue.jsを利用してシングルページアプリケーションの作成を考えているエンジニア、特にコンポーネントの設計や分類に悩んでいる方のためのガイドブックです。テストの書 ...',
      },
    },
    //三冊目
    {
      kind: 'books#volume',
      id: 'XofSDwAAQBAJ',
      etag: 'M+UhcpaHvdc',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/XofSDwAAQBAJ',
      volumeInfo: {
        title: 'ソードアート・オンライン キス・アンド・フライ１',
        publisher: 'KADOKAWA',
        publishedDate: '2020-03-10',
        description:
          '『ソードアート・オンライン』珠玉の短編集をコミカライズ！ 『ザ・デイ・ビフォア』――《SAO》攻略のさなか、キリトはアスナにプロポーズした。新婚生活に向け、キリトはかねてから計画していた新居の購入に踏み切るのだが、そこで待っていたのは予想外の事態で!? 『ザ・デイ・アフター』――新生《ALO》をプレイするアスナは、謎の離脱現象に襲われていた。アスナの脳裏に浮かぶ、謎の記憶。それには、かつて《SAO》でキリトが出会ったあの少女が関わっており……。 『虹の橋』（前編）――新生《ALO》の海底神殿にまつわるクエストを無事クリアしたキリトたち。だがクエストの内容はどうにも不可解で、一行は推理を巡らせるのだが……？',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:04913106A09272100000',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        printType: 'BOOK',
        categories: ['Comics & Graphic Novels'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.2.2.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: true,
          containsImageBubbles: true,
          epubBubbleVersion: 'c20066df51d731c1_A',
          imageBubbleVersion: 'c20066df51d731c1_A',
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=XofSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=XofSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        previewLink:
          'http://books.google.co.jp/books?id=XofSDwAAQBAJ&printsec=frontcover&dq=%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3&hl=&cd=2&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=XofSDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=XofSDwAAQBAJ',
      },
      saleInfo: {
        country: 'JP',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 715.0,
          currencyCode: 'JPY',
        },
        retailPrice: {
          amount: 644.0,
          currencyCode: 'JPY',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=XofSDwAAQBAJ&rdid=book-XofSDwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 7.15e8,
              currencyCode: 'JPY',
            },
            retailPrice: {
              amountInMicros: 6.44e8,
              currencyCode: 'JPY',
            },
          },
        ],
      },
      accessInfo: {
        country: 'JP',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3_%E3%82%AD-sample-epub.acsm?id=XofSDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3_%E3%82%AD-sample-pdf.acsm?id=XofSDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=XofSDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '『ソードアート・オンライン』珠玉の短編集をコミカライズ！ 『ザ・デイ・ビフォア』――《SAO》攻略のさなか、キリトはアスナにプロポーズした。新婚生活に向け、キリトは ...',
      },
    },
    //四冊目
    {
      kind: 'books#volume',
      id: '6uDszAEACAAJ',
      etag: 'D+EJonyElR0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/6uDszAEACAAJ',
      volumeInfo: {
        title: 'Form Design Patterns',
        subtitle: 'シンプルでインクルーシブなフォーム制作実践ガイド',
        authors: ['Adam Silver', 'アダムシルヴァー'],
        publishedDate: '2019-12',
        description:
          'フォームはインタラクションの要!あらゆるユーザーが使いやすいフォームで、最高のユーザー体験を。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '4862464513',
          },
          {
            type: 'ISBN_13',
            identifier: '9784862464514',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 320,
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6uDszAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6uDszAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        previewLink:
          'http://books.google.co.jp/books?id=6uDszAEACAAJ&dq=Form+Design+Patterns&hl=&cd=2&source=gbs_api',
        infoLink:
          'http://books.google.co.jp/books?id=6uDszAEACAAJ&dq=Form+Design+Patterns&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Form_Design_Patterns.html?hl=&id=6uDszAEACAAJ',
      },
      saleInfo: {
        country: 'JP',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'JP',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=6uDszAEACAAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'フォームはインタラクションの要!あらゆるユーザーが使いやすいフォームで、最高のユーザー体験を。',
      },
    },
    //五冊目
    {
      kind: 'books#volume',
      id: 'zw4wBwAAQBAJ',
      etag: '8TtM/pqWcik',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/zw4wBwAAQBAJ',
      volumeInfo: {
        title: '毎日パスタ',
        subtitle: '',
        authors: ['赤坂ビバレッジクッキングスクール'],
        publisher: '廣済堂出版',
        publishedDate: '2009-06-25',
        description:
          'パスタを茹でている間にささっと10分でソースを作る、簡単手軽な究極のパスタ本。一口コンロのキッチンでもすぐできるよう、具材作りにフライパンは使いません。どのレシピも茹で上がったパスタにささっとからめるだけ。特別な材料は使わず、身近なものを組み合わせて新鮮な美味しさを紹介します。自炊生活を応援する簡単１４５レシピ。 本書で紹介するパスタは、どんなレシピよりも簡単です。 １．基本は、ゆでたパスタに「あえるだけ」。 ２．パスタと一緒に材料を煮込むこともあります。 ３．ゆでている間にレンジを使って調理します。 新鮮なアイデアで、自炊ライフを応援します！',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784331513880',
          },
          {
            type: 'ISBN_10',
            identifier: '4331513882',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 183,
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.1.1.0.preview.3',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=zw4wBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=zw4wBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        previewLink:
          'http://books.google.co.jp/books?id=zw4wBwAAQBAJ&printsec=frontcover&dq=%E3%83%91%E3%82%B9%E3%82%BF&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=zw4wBwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=zw4wBwAAQBAJ',
      },
      saleInfo: {
        country: 'JP',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 935.0,
          currencyCode: 'JPY',
        },
        retailPrice: {
          amount: 842.0,
          currencyCode: 'JPY',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=zw4wBwAAQBAJ&rdid=book-zw4wBwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 9.35e8,
              currencyCode: 'JPY',
            },
            retailPrice: {
              amountInMicros: 8.42e8,
              currencyCode: 'JPY',
            },
          },
        ],
      },
      accessInfo: {
        country: 'JP',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E6%AF%8E%E6%97%A5%E3%83%91%E3%82%B9%E3%82%BF-sample-epub.acsm?id=zw4wBwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.jp/books/download/%E6%AF%8E%E6%97%A5%E3%83%91%E3%82%B9%E3%82%BF-sample-pdf.acsm?id=zw4wBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=zw4wBwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'パスタを茹でている間にささっと10分でソースを作る、簡単手軽な究極のパスタ本。一口コンロのキッチンでもすぐできるよう、具材作りにフライパンは使いません。どのレシピ ...',
      },
    },
  ],
}

app.get('/', function (req, res) {
  res.send(pickList)
})

module.exports = {
  path: '/api/pickup/',
  handler: app,
}
