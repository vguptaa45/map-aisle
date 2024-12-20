export interface Mall {
  id: string
  name: string
}

export interface Store {
  id: string
  name: string
  logo: string
  promotions?: Promotion[]
}

export interface Promotion {
  id: string
  storeName: string
  description: string
  discount: string
}

export interface ViewMode {
  type: 'top' | 'front'
}

