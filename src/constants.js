import getNameCellView from './modules/TableComponent/getNameCellView';

export const COLUMNS = [ {
    dataField: 'name',
    text: 'Name',
    formatter: getNameCellView
  }, {
    dataField: 'season',
    text: 'Season',
    searchable: false
  },
  {
    dataField: 'network',
    text: 'Network',
    searchable: false
  },{
    dataField: 'premiere',
    text: 'Premiere',
    searchable: false
  }];

export const TV_SHOWS = [
    {
        id: 1,
        name: 'tes1t',
        season: 12,
        network: 'HBO',
        premiere: 2005,
        genre: ['horror', 'fantasy']
    },
    {
        id: 2,
        name: 'test1233',
        season: 23,
        network: 'good',
        premiere: 2005,
        genre: ['comedy', 'fantasy']
    },  
    {
        id: 3,
        name: 'tes42t',
        season: 13,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy', 'fantasy']
    },
    {
        id: 4,
        name: 'test54',
        season: 1,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 5,
        name: 'test3',
        season: 5,
        network: 'HBO',
        premiere: 2015,
        genre: ['comedy']
    },
    {
        id: 6,
        name: 'test32',
        season: 3,
        network: 'HBO',
        premiere: 2025,
        genre: ['comedy']
    },    {
        id: 7,
        name: 'test23',
        season: 23,
        network: 'good',
        premiere: 2005,
        genre: ['comedy']
    },  
    {
        id: 8,
        name: 'tes42t',
        season: 13,
        network: 'HBO',
        premiere: 1995,
        genre: ['comedy']
    },
    {
        id: 9,
        name: 'test54',
        season: 1,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 10,
        name: 'test3',
        season: 5,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 11,
        name: 'test32',
        season: 3,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    }  ,    {
        id: 12,
        name: 'test23',
        season: 23,
        network: 'good',
        premiere: 2005,
        genre: ['comedy']
    },  
    {
        id: 13,
        name: 'tes42t',
        season: 13,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 14,
        name: 'test54',
        season: 1,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 15,
        name: 'test3',
        season: 5,
        network: 'HBO',
        premiere: 2005,
        genre: ['comedy']
    },
    {
        id: 252,
        name: 'test32',
        season: 3,
        network: 'HBO',
        premiere: 2005,
        genre: ['fighter']
    }    
]

