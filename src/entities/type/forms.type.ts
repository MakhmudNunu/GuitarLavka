interface IInviteForm {
    mail: string
}

interface IApplicationForm {
    name: string
    email: string
    phone: string
    message: string
    createdAt: string
}

interface IFeedbackForm {
    id?: number
    name: string
    image?: string
    feedback: string
    rate?: number
    createdAt: string
}

interface IOrderedProduct {
    productId: number
}

interface IOneClickOrder {
    productId: number
    orderType: string
    name: string
    phone: string
}

interface IPlacingAnOrder {
    name: string
    mail: string
    phone: string
    comment: string
    promoCode?: string
    paymentType: string
    orderType: string
    expressType?: string
    deliveryPrice?: number
    orderedProducts: IOrderedProduct[]
    totalPrice: number
    createdAt: string
}