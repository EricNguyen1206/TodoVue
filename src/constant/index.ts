import type { Todo } from '@/declaration'

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

export const TODO_DATA: Todo[] = [
  {
    id: 1,
    status: false,
    value: 'Tim thay manh vo may bay 66 nguoi chet',
    level: 'High'
  },
  {
    id: 2,
    status: false,
    value: 'Không còn tranh cướp lộc hoa tre ở lễ hỗi đền Gióng 2018',
    level: 'Small'
  },
  {
    id: 3,
    status: false,
    value: 'Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo.',
    level: 'Medium'
  },
  {
    id: 4,
    status: false,
    value: 'Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết',
    level: 'Medium'
  },
  {
    id: 5,
    status: false,
    value: 'VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 trước Tết',
    level: 'Medium'
  },
  {
    id: 6,
    status: false,
    value: 'F1 muốn tổ chức giải đua xe ở Việt Nam vào năm 2020',
    level: 'Small'
  }
]
