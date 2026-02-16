import type { CategoryType } from "./CategoryType";


export interface ProductType {
      id: number,
      title: string,
      slug: string,
      price: number,
      description: string,
      category: CategoryType,
      images: Array<string>
}