const express = require('express')
const app = express()
const comicPickList = {
  items: [
    //一冊目
    {
      id: '6315DwAAQBAJ',
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
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=6315DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=6315DwAAQBAJ',
      },
    },
    //二冊目
    {
      id: '0PDJCwAAQBAJ',
      volumeInfo: {
        title: 'テニスの王子様 1',
        authors: ['許斐剛'],
        publisher: '集英社',
        publishedDate: '2000-01-07',
        description:
          'テニスの名門校・青春学園中等部に入学してきた越前リョーマ。アメリカJr．大会4連続優勝の経歴を持ち、天才少年と呼ばれるリョーマだったが、青学テニス部には、1年生は夏まで大会に出られない規則があり…!?',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08872815872815315501',
          },
        ],
        pageCount: 190,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=0PDJCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=0PDJCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=0PDJCwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=0PDJCwAAQBAJ',
      },
    },
    //3冊目
    {
      id: '3D3bPQAACAAJ',
      volumeInfo: {
        title: 'ヒカルの碁',
        subtitle: 'KAIO vs.HAZE',
        authors: ['ほったゆみ', '小畑健', '横手美智子'],
        publishedDate: '2003-03-15',
        description:
          '中学生になり、囲碁部に入ったヒカルは、囲碁大会出場へ向けて、新メンバーを探し始める。しかし、ようやく見つけた三谷というその生徒は、大人相手の賭け碁で、巧みに不正をはたらいていた!一方、ヒカルに対局を断られたアキラは、自分も海王中囲碁部に入部。周囲の戸惑いやイジメにも屈せず、一心にヒカル(=佐為)との対局を待ち望んでいた。',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '408703125X',
          },
          {
            type: 'ISBN_13',
            identifier: '9784087031256',
          },
        ],
        pageCount: 216,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=3D3bPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=3D3bPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'http://books.google.co.jp/books?id=3D3bPQAACAAJ&dq=%E3%83%92%E3%82%AB%E3%83%AB%E3%81%AE%E7%A2%81&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/%E3%83%92%E3%82%AB%E3%83%AB%E3%81%AE%E7%A2%81.html?hl=&id=3D3bPQAACAAJ',
      },
    },
    //四冊目
    {
      id: 'BtT0CgAAQBAJ',
      volumeInfo: {
        title: '焼きたて！！ジャぱん（１５）',
        authors: ['橋口たかし'],
        publisher: '小学館',
        publishedDate: '2004-12-17',
        description:
          'パンタジアが宿敵・サンピエールに乗っ取られた！！月乃の祖父ら経営陣も退陣させられ、パンタジア新社長の座には雪乃が収まるかと思いきや、霧崎が指名したのはなんと月乃！しかも雪乃にはサンピエール社長を任せ、霧崎自身は全ての役職から身を引くとのこと。そこには、和馬たちがモナコカップで得た120億の資金を、いったん自分の側に取り込んだ上で消耗させようという思惑が…',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000018573301501501900203',
          },
        ],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=BtT0CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=BtT0CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=BtT0CgAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=BtT0CgAAQBAJ',
      },
    },
    //五冊目
    {
      id: 'QzjODwAAQBAJ',
      volumeInfo: {
        title: 'MIX（１６）',
        authors: ['あだち充'],
        publisher: '小学館',
        publishedDate: '2020-02-12',
        description:
          '立花兄弟、高校2年の夏、始まる。 投馬と走一郎の 二度目の夏がやって来る。 注目の兄弟バッテリーに、 走攻守充実のナイン。 今年はシード校として 大会に臨む明青学園に ……死角ナシ？！ ”二度目の奇跡”は起こるのか…？！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000021435101601601900203',
          },
        ],
        pageCount: 194,
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=QzjODwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=QzjODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=QzjODwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=QzjODwAAQBAJ',
      },
    },
    //6冊目
    {
      id: 'RsNPDwAAQBAJ',
      volumeInfo: {
        title: '転生したらスライムだった件12',
        authors: ['伏瀬', 'みっつばー'],
        publisher: 'マイクロマガジン社',
        publishedDate: '2018-03-09',
        description:
          '順調に勢力拡大を続けるテンペストに向け、ついに『東の帝国』が動き出した。 未来を知る少女“勇者クロエ”の話では、とある時間軸で、その帝国によってリムルが討たれ、テンペストが崩壊したという。 今はその時とは違った運命線にいるとはいえ、可能性が消えたわけではない。 警戒を強めるリムルであったが、そんな折、帝国の密偵がテンペストに潜入する――。 シリーズ累計450万部突破！ 大人気モンスター転生ファンタジー、最新刊が登場！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000026681801301301900209',
          },
        ],
        pageCount: 356,
        categories: ['Young Adult Fiction'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=RsNPDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=RsNPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=RsNPDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=RsNPDwAAQBAJ',
      },
    },
    //7冊目
    {
      id: 'MHzDBQAAQBAJ',
      volumeInfo: {
        title: 'となりの怪物くん（９）',
        authors: ['ろびこ'],
        publisher: '講談社',
        publishedDate: '2012-03-13',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000012623100900901900206',
          },
        ],
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=MHzDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=MHzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=MHzDBQAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=MHzDBQAAQBAJ',
      },
    },
    //8冊目
    {
      id: 'XofSDwAAQBAJ',
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
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=XofSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=XofSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=XofSDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=XofSDwAAQBAJ',
      },
    },
    //9冊目
    {
      id: 'SYnBDwAAQBAJ',
      volumeInfo: {
        title: 'ちはやふる（４３）',
        authors: ['末次由紀'],
        publisher: '講談社',
        publishedDate: '2019-12-13',
        description:
          'ついに名人・クイーン戦 第一試合が始まった!! クイーン・若宮詩暢の圧倒的な強さを前に、千早はどう戦うのか――!? 同じ会場で周防名人に向き合う新の思い、そして太一は――！！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000012685704304301900206',
          },
        ],
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=SYnBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=SYnBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=SYnBDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=SYnBDwAAQBAJ',
      },
    },
    //10冊目
    {
      id: '-QuVDwAAQBAJ',
      volumeInfo: {
        title: 'ジンメン（１１）',
        authors: ['カトウタカヒロ'],
        publisher: '小学館',
        publishedDate: '2019-05-10',
        description:
          '最終決戦、開始。 四季族フリューリンクを倒すも、共闘したヴィンターと永長を亡くしたマサトたち。 それでも確かな意志を受け継ぎ、一行は逃亡した豚園長を追い詰めに向かうが・・・？ だが敵陣最奥部でマサトは因縁の人物である父親と再会！ 愛憎、矜持、絶望・・・様々な想いが駆け巡る中、ジンメンとの最終決戦が今始まる！！！！！',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000041687301101101900203',
          },
        ],
        pageCount: 192,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=-QuVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=-QuVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=-QuVDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=-QuVDwAAQBAJ',
      },
    },
    //11冊目
    {
      id: 'q6aCDAAAQBAJ',
      volumeInfo: {
        title: 'ラフ',
        authors: ['青木ひかる', 'あだち充'],
        publisher: '小学館',
        publishedDate: '2008-08-06',
        description:
          '高校進学と同時に大和圭介は水泳部に入部。そこで再会した二ノ宮亜美は圭介のことを「ひと殺し」と呼んだ――。 同じ寮で過ごすことになったふたりは、いがみ合いながらもどこかで惹かれ合い、そしてまたすれ違う。不器用でもどかしく、思うようにいかない青春のとき。素直な気持ちはなかなか伝えられない。 涙と笑い、挫折と情熱。友情、恋、夢……まぶしい想いをつめこんで、未完成なふたりが三年目の熱い夏をむかえる。 今もなおファンの支持を集める、あだち充の傑作『ラフ』が小説に。映画「ラフ」の脚本をもとに描いた、夏がくれた爽やかな青春ラブストーリー。',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000010375100100101900209',
          },
        ],
        pageCount: 205,
        categories: ['Fiction'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=q6aCDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=q6aCDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=q6aCDAAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=q6aCDAAAQBAJ',
      },
    },
    //12冊目
    {
      id: 'JxQ0DwAAQBAJ',
      volumeInfo: {
        title: 'ランウェイで笑って（１）',
        authors: ['猪ノ谷言葉'],
        publisher: '講談社',
        publishedDate: '2017-09-15',
        description:
          '身長は、158cmから伸びなかった・・・。藤戸千雪の夢は「パリ・コレ」モデル。モデルとして致命的な低身長ゆえに、周囲は「諦めろ」と言うが、千雪は折れない。そんなとき、千雪はクラスの貧乏男子・都村育人の諦めきれない夢「ファッションデザイナー」を「無理でしょ」と切ってしまい・・・!?「叶わない」宣告をされても、それでも一途に夢を追って走る２人の物語。',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000046453600100101900206',
          },
        ],
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=JxQ0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=JxQ0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=JxQ0DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=JxQ0DwAAQBAJ',
      },
    },
    //13冊目
    {
      id: 'vjPMDwAAQBAJ',
      volumeInfo: {
        title: 'ハイキュー!! 42',
        authors: ['古舘春一'],
        publisher: '集英社',
        publishedDate: '2020-03-04',
        description:
          '体調不良で日向がコートを離れ、烏野高校排球部は主力を欠いたまま鴎台との決着へと臨む――…！ 途方もない悔しさと共に中継画面越しのコートをみつめて、日向はそこに何を見出すのか…春高バレー編完結!!',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08882228870453315501',
          },
        ],
        pageCount: 207,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=vjPMDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=vjPMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=vjPMDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=vjPMDwAAQBAJ',
      },
    },
    //14冊目
    {
      id: '8GvVDwAAQBAJ',
      volumeInfo: {
        title: '炎炎ノ消防隊（２２）',
        authors: ['大久保篤'],
        publisher: '講談社',
        publishedDate: '2020-03-17',
        description:
          '全人類は怯えていた──。何の変哲もない人が突如燃え出し、炎の怪物“焔ビト”となって、破壊の限りを尽くす“人体発火現象”。炎の恐怖に立ち向かう特殊消防隊は、現象の謎を解明し、人類を救うことが使命！ とある理由から“悪魔”と呼ばれる、新入隊員の少年・シンラは、“ヒーロー”を目指し、仲間たちと共に、“焔ビト”との戦いの日々に身を投じる！！ 燃え上がるバトル・ファンタジー、始動！！ 第8×第2連合隊VS.白装束──、地獄と化した“地下（ネザー）”で生き残るのは!? 大量の“焔ビト”や紫煙騎士団の襲撃により“地下”での戦闘は苛烈を極めた。シンラの前には、身体改造を繰り返し怪物と化したDr.ジョヴァンニが現れ、“蟲”と“アドラ”の秘密、滅びへと向かう伝導者の計画を語り始める。一方、死者を操るリツの能力を使った東京壊滅の策略が判明し、追い詰められる消防隊員たち…。マキなき第8に残された手は!?',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000035887102202201900206',
          },
        ],
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=8GvVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=8GvVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=8GvVDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=8GvVDwAAQBAJ',
      },
    },
    //15冊目
    {
      id: 'nhUqDwAAQBAJ',
      volumeInfo: {
        title: 'Dr.STONE 1',
        authors: ['稲垣理一郎', 'Boichi'],
        publisher: '集英社',
        publishedDate: '2017-07-04',
        description:
          '【デジタル版限定！巻末に描き下ろし特典イラスト付き！】一瞬にして世界中すべての人間が石と化す、謎の現象に巻き込まれた高校生の大樹。数千年後――。目覚めた大樹とその友・千空はゼロから文明を作ることを決意する!! 空前絶後のSFサバイバル冒険譚、開幕!!',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08881184881184315501',
          },
        ],
        pageCount: 197,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nhUqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nhUqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=nhUqDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=nhUqDwAAQBAJ',
      },
    },
    //16冊目
    {
      id: 'lxGPDwAAQBAJ',
      volumeInfo: {
        title: '名探偵コナン（９６）',
        authors: ['青山剛昌'],
        publisher: '小学館',
        publishedDate: '2019-04-10',
        description:
          '濃密な長編シリーズ満載の最新刊！ 劇場版第23弾『紺青の拳（フィスト）』で活躍する、怪盗キッドが、服部平次と初対峙！ そして、「女性警察官連続殺人事件」や京極真が登場する「ドラマ現場連続殺人事件」など、濃密な長編シリーズが満載の必読巻です！ 更に、組織のボスに関する 新たなピースが……！？',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:BT000018339209609601900203',
          },
        ],
        pageCount: 192,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=lxGPDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=lxGPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=lxGPDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=lxGPDwAAQBAJ',
      },
    },
    //17冊目
    {
      id: 'nCyrDwAAQBAJ',
      volumeInfo: {
        title: 'アシガール 13',
        authors: ['森本梢子'],
        publisher: '集英社',
        publishedDate: '2019-09-25',
        description:
          '唯は現代の両親にも許しを得て、若君と戦国時代に戻ることに。羽木家一同と身を寄せた緑合の地で、みんなに祝福されてめでたく結婚！ しかし、勢力を伸ばしつつある織田信長が、ついに緑合にもその姿を見せ始め…？ 愛のために、みんなのために唯は再び走り出す!!',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08844249846807315501',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 187,
        printType: 'BOOK',
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nCyrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nCyrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=nCyrDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=nCyrDwAAQBAJ',
      },
    },
    //18冊目
    {
      id: 'oc-4DwAAQBAJ',
      volumeInfo: {
        title: '僕のヒーローアカデミア 25',
        authors: ['堀越耕平'],
        publisher: '集英社',
        publishedDate: '2019-12-04',
        description:
          'さっきまでの割れるような頭の痛さは消えた…。 ああ…思い出した…。ガキの頃に初めて感じた快感。俺にとって家族との記憶は悲劇なんかじゃない。こんなヒーロー溢れる社会も、未来も要らない…全部ぶっ壊れろよ!!',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08882074880264315501',
          },
        ],
        pageCount: 203,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=oc-4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=oc-4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=oc-4DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=oc-4DwAAQBAJ',
      },
    },
    //19冊目
    {
      id: 'nc-4DwAAQBAJ',
      volumeInfo: {
        title: 'ワンパンマン 21',
        authors: ['ONE', '村田雄介'],
        publisher: '集英社',
        publishedDate: '2019-12-04',
        description:
          '怪人協会vsヒーロー達の決戦が開幕！ A級以下のヒーローが苦戦する中、S級の面々は怪人達を一撃のもとに倒し、地底へ潜入を開始｡その中でも閃光のフラッシュは怪人と化した忍者と華麗なバトルを魅せる!!',
        industryIdentifiers: [
          {
            type: 'OTHER',
            identifier: 'PKEY:08881815870701315501',
          },
        ],
        pageCount: 242,
        categories: ['Comics & Graphic Novels'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nc-4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nc-4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=nc-4DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=nc-4DwAAQBAJ',
      },
    },
    //20冊目
    {
      id: 'Vb3RDwAAQBAJ',
      volumeInfo: {
        title: '薬屋のひとりごと　９',
        authors: ['日向 夏'],
        publisher: '主婦の友社',
        publishedDate: '2020-02-28',
        description:
          'シリーズ累計600万部！ 待望の最新刊では二人の「その後」が明らかに！ 猫猫と壬氏が船旅に？ 壬氏の一世一代の行動の結果、 とんでもない秘密を共有することとなってしまった猫猫。 折しも後宮は年末年始の休暇に入る時期。 実家に帰りたくない姚は、猫猫の家に泊まりたいと言い出した。 とはいえお嬢様を花街に連れていくわけにもいかず、 姚と燕燕は紹介された羅半の家に泊まることになる。 一方、口外できない怪我を負った壬氏のために、 猫猫は秘密裏に壬氏のもとに通わなくてはならなかった。 できる範囲で治療を施していくが、 医官付き官女という曖昧な立場に悩まされる。 壬氏が今後さらに怪我を負わないとも限らないが、 医官にはなれない猫猫は医術を学ぶことはできない。 そこで、羅門に医術の教えを乞おうと決めるのだが——。',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9784074424207',
          },
          {
            type: 'ISBN_10',
            identifier: '4074424207',
          },
        ],
        pageCount: 408,
        categories: ['Fiction'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=Vb3RDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=Vb3RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'ja',
        infoLink:
          'https://play.google.com/store/books/details?id=Vb3RDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=Vb3RDwAAQBAJ',
      },
    },
  ],
}

app.get('/', function (req, res) {
  res.send(comicPickList)
})

module.exports = {
  path: '/api/pickup/comic',
  handler: app,
}
