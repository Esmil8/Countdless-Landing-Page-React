

export type FormProps = {

    name: string;
    email: string;
}

export type UserEntity = {

    id: number,
    name: string,
    email: string
    createdAt: string
}

export type SubmitResponse = {
    message: string;
    data: UserEntity
}

export const submitForm = async (data: FormProps): Promise<SubmitResponse> => {

    const res = await fetch('http://localhost:3000/coundless/submit', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    
    const result: SubmitResponse = await res.json() as SubmitResponse

    if (!res.ok) {
        throw new Error(result.message || 'Failed to submit form')
    }

    return result
}