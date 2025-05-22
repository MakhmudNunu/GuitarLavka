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