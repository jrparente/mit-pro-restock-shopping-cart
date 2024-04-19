<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">React Shopping Cart</h3>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

This is a simple shopping cart application built with React. It allows users to add and remove items from the cart, and displays the total price of the items in the cart. The application is responsive and uses Bootstrap for styling.

This was developed from a starter code provided from the MIT xPRO Professional Certificate in Coding: Full Stack Development with MERN course, and I have implemented the following improvements:

- Content is either fetched fom a Strapi API or hardcoded in the application. The app checks if the API is available and fetches the data from it, otherwise it uses the hardcoded data.
- Improved the UX/UI of the entire application, by adding product cards, simplifying the shopping cart layout, adding a Remove button to each item in the cart, removing the restock button and adding the restock functionality to the "Check Out" button.
- Added the add and remove stock functionalities to the Add to card button and the Remove button, respectively.
- Added an alert message when the user tries to add more items to the cart than the available stock.
- Added the restock functionality to the "Check Out" button, which resets the stock of all items to the original values.
- Fixed the checkOut function to reset the cart to an empty array after the user checks out.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Joana Parente - [@joana_r_parente](https://twitter.com/joana_r_parente) - jrparente@gmail.com

Project Link: [https://github.com/jrparente/mit-pro-restock-shopping-cart](https://github.com/jrparente/mit-pro-restock-shopping-cart)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jrparente/mit-pro-restock-shopping-cart.svg?style=for-the-badge
[contributors-url]: https://github.com/jrparente/mit-pro-restock-shopping-cart/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jrparente/mit-pro-restock-shopping-cart.svg?style=for-the-badge
[forks-url]: https://github.com/jrparente/mit-pro-restock-shopping-cart/network/members
[stars-shield]: https://img.shields.io/github/stars/jrparente/mit-pro-restock-shopping-cart.svg?style=for-the-badge
[stars-url]: https://github.com/jrparente/mit-pro-restock-shopping-cart/stargazers
[issues-shield]: https://img.shields.io/github/issues/jrparente/mit-pro-restock-shopping-cart.svg?style=for-the-badge
[issues-url]: https://github.com/jrparente/mit-pro-restock-shopping-cart/issues
[license-shield]: https://img.shields.io/github/license/jrparente/mit-pro-restock-shopping-cart.svg?style=for-the-badge
[license-url]: https://github.com/jrparente/mit-pro-restock-shopping-cart/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joanaparente
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
