# FakeStore Next - Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Uses [Shadcn/ui](https://ui.shadcn.com/), [Tailwindcss](https://tailwindcss.com/) for the syles and [Fake Store API](https://fakestoreapi.com/) to retrieve products.

[online here](https://fakestore-next.netlify.app/)

## Paths / views

- Home (/)
  shows the searchbar component where you can search for all the available products
  cards for the available categories

- All Producst /products
  - searchbar
  - all products

- Single product / detail page (/products/[product-id])
  - searchbar where you can search for all the available products
  - Detailed information of the product 

- Category (/[category-slug]) electronics jewelery eg
  - searchbar where you can search for all the products available in this category
  - all products in this category 

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Todo
- [x] use Shadcn/ui, Tailwindcss, Nextjs 14, and FakeStore (products)
- [x] get products/categories
- [x] cards with icons
- [x] single product detail page
- [x] filter products
- [x] Responsive
- [] searchbar like https://intro.co/marketplace
