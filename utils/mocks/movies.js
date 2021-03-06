const moviesMock = [
  {
    id: '60be5e14-3396-4ab8-ae5b-2906fde9f2cb',
    title: 'Armless',
    year: 1997,
    cover: 'http://dummyimage.com/145x171.bmp/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1893,
    contentRating: 'G',
    source:
      'https://oracle.com/quis/tortor/id/nulla/ultrices/aliquet/maecenas.js?phasellus=in&sit=lectus&amet=pellentesque&erat=at&nulla=nulla&tempus=suspendisse&vivamus=potenti&in=cras&felis=in&eu=purus&sapien=eu&cursus=magna&vestibulum=vulputate&proin=luctus&eu=cum&mi=sociis&nulla=natoque&ac=penatibus&enim=et&in=magnis&tempor=dis&turpis=parturient&nec=montes&euismod=nascetur&scelerisque=ridiculus&quam=mus&turpis=vivamus&adipiscing=vestibulum&lorem=sagittis&vitae=sapien&mattis=cum&nibh=sociis&ligula=natoque&nec=penatibus&sem=et&duis=magnis&aliquam=dis&convallis=parturient&nunc=montes&proin=nascetur&at=ridiculus&turpis=mus&a=etiam&pede=vel&posuere=augue&nonummy=vestibulum&integer=rutrum&non=rutrum&velit=neque&donec=aenean&diam=auctor&neque=gravida&vestibulum=sem&eget=praesent&vulputate=id&ut=massa&ultrices=id&vel=nisl&augue=venenatis&vestibulum=lacinia&ante=aenean&ipsum=sit&primis=amet&in=justo&faucibus=morbi&orci=ut&luctus=odio&et=cras&ultrices=mi&posuere=pede&cubilia=malesuada&curae=in&donec=imperdiet&pharetra=et&magna=commodo&vestibulum=vulputate&aliquet=justo&ultrices=in&erat=blandit&tortor=ultrices&sollicitudin=enim&mi=lorem&sit=ipsum&amet=dolor&lobortis=sit&sapien=amet&sapien=consectetuer',
    tags: [
      'Comedy|Drama|Romance',
      'Drama|Film-Noir|Thriller',
      'Documentary',
      'Documentary',
      'Comedy|Fantasy'
    ]
  },
  {
    id: 'd5ca8f28-1809-4dd9-9b53-562991610b69',
    title: 'Pearl Jam Twenty',
    year: 1985,
    cover: 'http://dummyimage.com/168x119.jpg/5fa2dd/ffffff',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1900,
    contentRating: 'NC-17',
    source:
      'https://bandcamp.com/ut/dolor/morbi/vel/lectus/in/quam.html?bibendum=tristique&morbi=est&non=et&quam=tempus&nec=semper&dui=est&luctus=quam&rutrum=pharetra&nulla=magna&tellus=ac&in=consequat&sagittis=metus&dui=sapien&vel=ut&nisl=nunc&duis=vestibulum&ac=ante&nibh=ipsum&fusce=primis&lacus=in&purus=faucibus&aliquet=orci&at=luctus&feugiat=et&non=ultrices&pretium=posuere&quis=cubilia&lectus=curae&suspendisse=mauris&potenti=viverra&in=diam&eleifend=vitae&quam=quam&a=suspendisse&odio=potenti&in=nullam&hac=porttitor&habitasse=lacus&platea=at&dictumst=turpis&maecenas=donec&ut=posuere&massa=metus&quis=vitae&augue=ipsum&luctus=aliquam&tincidunt=non&nulla=mauris&mollis=morbi&molestie=non',
    tags: ['Comedy|Horror', 'Comedy|Drama|Romance', 'Drama', 'Comedy']
  },

  {
    id: 'eb5479ef-e314-4676-ab80-fff407398f25',
    title: "Pooh's Heffalump Movie",
    year: 2009,
    cover: 'http://dummyimage.com/154x151.jpg/5fa2dd/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 2034,
    contentRating: 'PG',
    source:
      'http://deliciousdays.com/potenti/cras/in/purus.png?mi=volutpat&sit=erat&amet=quisque&lobortis=erat&sapien=eros&sapien=viverra&non=eget&mi=congue&integer=eget&ac=semper&neque=rutrum&duis=nulla&bibendum=nunc&morbi=purus&non=phasellus&quam=in&nec=felis&dui=donec&luctus=semper&rutrum=sapien&nulla=a&tellus=libero&in=nam&sagittis=dui&dui=proin&vel=leo&nisl=odio&duis=porttitor&ac=id&nibh=consequat&fusce=in&lacus=consequat&purus=ut&aliquet=nulla&at=sed&feugiat=accumsan&non=felis&pretium=ut',
    tags: ['Comedy|Musical|Romance', 'Adventure', 'Documentary']
  },

  {
    id: '8cbf407f-b1ff-4015-9039-257ca0932278',
    title: 'Another Chance',
    year: 2002,
    cover: 'http://dummyimage.com/221x169.bmp/cc0000/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2013,
    contentRating: 'G',
    source:
      'http://jimdo.com/justo/maecenas/rhoncus/aliquam/lacus.aspx?semper=nunc&interdum=purus&mauris=phasellus&ullamcorper=in&purus=felis&sit=donec&amet=semper&nulla=sapien&quisque=a&arcu=libero&libero=nam&rutrum=dui&ac=proin&lobortis=leo',
    tags: ['Action|Crime|Drama']
  },

  {
    id: 'ee9a645f-b00a-4fd5-becc-5fb18f3feb68',
    title: 'Black Christmas',
    year: 2010,
    cover: 'http://dummyimage.com/240x138.jpg/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2037,
    contentRating: 'PG',
    source:
      'https://alexa.com/nec.jpg?curae=molestie&duis=hendrerit&faucibus=at&accumsan=vulputate&odio=vitae&curabitur=nisl&convallis=aenean&duis=lectus&consequat=pellentesque&dui=eget&nec=nunc&nisi=donec&volutpat=quis&eleifend=orci&donec=eget&ut=orci&dolor=vehicula&morbi=condimentum&vel=curabitur&lectus=in&in=libero&quam=ut&fringilla=massa&rhoncus=volutpat&mauris=convallis&enim=morbi&leo=odio&rhoncus=odio&sed=elementum&vestibulum=eu&sit=interdum&amet=eu&cursus=tincidunt&id=in&turpis=leo&integer=maecenas&aliquet=pulvinar&massa=lobortis&id=est&lobortis=phasellus&convallis=sit&tortor=amet&risus=erat&dapibus=nulla&augue=tempus&vel=vivamus&accumsan=in&tellus=felis&nisi=eu&eu=sapien&orci=cursus&mauris=vestibulum&lacinia=proin&sapien=eu&quis=mi&libero=nulla&nullam=ac&sit=enim&amet=in&turpis=tempor&elementum=turpis&ligula=nec&vehicula=euismod&consequat=scelerisque&morbi=quam&a=turpis&ipsum=adipiscing&integer=lorem&a=vitae&nibh=mattis',
    tags: ['Action|Adventure|Drama|Sci-Fi', 'Drama|Thriller', 'Action|Sci-Fi']
  },

  {
    id: 'd76994c3-3c80-4082-898f-e60646cd2866',
    title: 'Seaside (Bord de Mer)',
    year: 2003,
    cover: 'http://dummyimage.com/243x228.jpg/dddddd/000000',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1941,
    contentRating: 'R',
    source:
      'https://exblog.jp/curae/mauris/viverra/diam/vitae.js?metus=dui&sapien=vel&ut=sem&nunc=sed&vestibulum=sagittis&ante=nam&ipsum=congue&primis=risus&in=semper&faucibus=porta&orci=volutpat&luctus=quam&et=pede&ultrices=lobortis&posuere=ligula&cubilia=sit&curae=amet&mauris=eleifend&viverra=pede&diam=libero&vitae=quis&quam=orci&suspendisse=nullam&potenti=molestie&nullam=nibh&porttitor=in&lacus=lectus&at=pellentesque&turpis=at&donec=nulla&posuere=suspendisse&metus=potenti&vitae=cras&ipsum=in&aliquam=purus&non=eu&mauris=magna&morbi=vulputate&non=luctus&lectus=cum&aliquam=sociis&sit=natoque&amet=penatibus&diam=et&in=magnis&magna=dis&bibendum=parturient&imperdiet=montes&nullam=nascetur&orci=ridiculus&pede=mus&venenatis=vivamus&non=vestibulum&sodales=sagittis&sed=sapien&tincidunt=cum&eu=sociis&felis=natoque&fusce=penatibus&posuere=et&felis=magnis&sed=dis&lacus=parturient&morbi=montes&sem=nascetur&mauris=ridiculus&laoreet=mus&ut=etiam&rhoncus=vel&aliquet=augue&pulvinar=vestibulum&sed=rutrum&nisl=rutrum&nunc=neque&rhoncus=aenean&dui=auctor&vel=gravida&sem=sem&sed=praesent&sagittis=id&nam=massa',
    tags: ['Drama', 'Documentary', 'Drama|War']
  },

  {
    id: 'a2450287-4e6e-4bc2-ba8f-1043c6b49b2a',
    title: 'Fortune, The',
    year: 2001,
    cover: 'http://dummyimage.com/132x157.bmp/dddddd/000000',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2059,
    contentRating: 'PG',
    source:
      'http://virginia.edu/a.html?cubilia=ornare&curae=imperdiet&donec=sapien&pharetra=urna&magna=pretium&vestibulum=nisl&aliquet=ut&ultrices=volutpat&erat=sapien&tortor=arcu&sollicitudin=sed&mi=augue&sit=aliquam&amet=erat&lobortis=volutpat&sapien=in&sapien=congue&non=etiam&mi=justo&integer=etiam&ac=pretium&neque=iaculis&duis=justo&bibendum=in&morbi=hac&non=habitasse&quam=platea&nec=dictumst&dui=etiam&luctus=faucibus&rutrum=cursus&nulla=urna&tellus=ut&in=tellus&sagittis=nulla&dui=ut&vel=erat&nisl=id&duis=mauris&ac=vulputate',
    tags: ['Drama|Romance', 'Adventure|Drama']
  },

  {
    id: '06735b51-fb4f-428a-91cd-8ad8eeafa5bb',
    title: 'Careful',
    year: 2002,
    cover: 'http://dummyimage.com/166x142.bmp/ff4444/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1978,
    contentRating: 'G',
    source:
      'https://shutterfly.com/lorem.jpg?maecenas=ut&rhoncus=odio&aliquam=cras&lacus=mi&morbi=pede&quis=malesuada&tortor=in&id=imperdiet&nulla=et&ultrices=commodo&aliquet=vulputate&maecenas=justo&leo=in&odio=blandit&condimentum=ultrices&id=enim&luctus=lorem&nec=ipsum&molestie=dolor&sed=sit&justo=amet&pellentesque=consectetuer&viverra=adipiscing&pede=elit&ac=proin&diam=interdum&cras=mauris&pellentesque=non',
    tags: ['Animation', 'Horror|Mystery|Thriller', 'Drama']
  },

  {
    id: 'f74c2e02-58dc-41b8-a383-e7efb66fd98c',
    title: 'Burn',
    year: 1996,
    cover: 'http://dummyimage.com/213x246.jpg/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 2067,
    contentRating: 'PG-13',
    source:
      'https://dot.gov/sodales/scelerisque/mauris/sit.jpg?in=imperdiet&sapien=et&iaculis=commodo&congue=vulputate&vivamus=justo&metus=in&arcu=blandit&adipiscing=ultrices&molestie=enim&hendrerit=lorem&at=ipsum&vulputate=dolor&vitae=sit&nisl=amet&aenean=consectetuer&lectus=adipiscing&pellentesque=elit&eget=proin&nunc=interdum&donec=mauris&quis=non&orci=ligula&eget=pellentesque&orci=ultrices&vehicula=phasellus&condimentum=id&curabitur=sapien&in=in&libero=sapien&ut=iaculis&massa=congue&volutpat=vivamus&convallis=metus&morbi=arcu&odio=adipiscing&odio=molestie&elementum=hendrerit&eu=at&interdum=vulputate&eu=vitae&tincidunt=nisl&in=aenean&leo=lectus&maecenas=pellentesque&pulvinar=eget&lobortis=nunc&est=donec&phasellus=quis&sit=orci&amet=eget&erat=orci&nulla=vehicula&tempus=condimentum&vivamus=curabitur&in=in&felis=libero&eu=ut&sapien=massa&cursus=volutpat&vestibulum=convallis&proin=morbi&eu=odio&mi=odio&nulla=elementum&ac=eu&enim=interdum&in=eu&tempor=tincidunt&turpis=in&nec=leo&euismod=maecenas&scelerisque=pulvinar&quam=lobortis&turpis=est&adipiscing=phasellus&lorem=sit&vitae=amet',
    tags: ['Horror']
  },

  {
    id: '7747ce08-5aa7-4247-bed0-2b83baf0ac2f',
    title: 'Court-Martial of Billy Mitchell, The',
    year: 2012,
    cover: 'http://dummyimage.com/143x233.bmp/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2048,
    contentRating: 'G',
    source:
      'http://phpbb.com/sed.js?venenatis=curabitur&non=convallis&sodales=duis&sed=consequat&tincidunt=dui&eu=nec&felis=nisi&fusce=volutpat&posuere=eleifend&felis=donec&sed=ut&lacus=dolor&morbi=morbi&sem=vel&mauris=lectus&laoreet=in&ut=quam&rhoncus=fringilla&aliquet=rhoncus&pulvinar=mauris&sed=enim&nisl=leo&nunc=rhoncus&rhoncus=sed&dui=vestibulum&vel=sit&sem=amet&sed=cursus&sagittis=id&nam=turpis&congue=integer&risus=aliquet&semper=massa&porta=id&volutpat=lobortis&quam=convallis&pede=tortor&lobortis=risus&ligula=dapibus&sit=augue&amet=vel&eleifend=accumsan&pede=tellus&libero=nisi&quis=eu&orci=orci&nullam=mauris&molestie=lacinia&nibh=sapien&in=quis&lectus=libero&pellentesque=nullam&at=sit&nulla=amet&suspendisse=turpis&potenti=elementum&cras=ligula&in=vehicula&purus=consequat&eu=morbi&magna=a&vulputate=ipsum&luctus=integer&cum=a&sociis=nibh',
    tags: ['Crime|Drama']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}
module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock };
