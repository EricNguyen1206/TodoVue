export enum ENUM_LEVEL {
  Small = 'Small',
  Medium = 'Medium',
  High = 'High'
}

export enum ENUM_SORT {
  NameASC = 'NAME ASC',
  NameDESC = 'NAME DESC',
  LevelASC = 'Level ASC',
  LevelDESC = 'Level DESC'
}

export type TypeLevel = `${ENUM_LEVEL}`
export type TypeSort = `${ENUM_SORT}`
