export interface IProducts {
    id: number;
    type?: string
    title: string
    price: number
    discount?: number
    rate: number
    feedbacks?: number
    image: string
    link: string
    stock: number
    description: string
    specs: [string]
    warranty: string
    delivery: string
    payment: string
    quantity?: number
}

export interface ICartProduct extends IProducts {
    quantity: number;
}