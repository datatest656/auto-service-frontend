// types.ts
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url?: string; // Поле для URL изображения, если оно существует
}
