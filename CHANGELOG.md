# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Interactive Map View:** Implemented a map on the search results page to display shop locations, powered by Leaflet. Users can now toggle between a list view and a map view.
- **User Reviews and Ratings:** Added a review and rating system to shop detail pages. This includes a `ShopReviews` component to display the average rating and individual customer comments.
- **Star Rating Component:** Created a reusable `StarRating` component to visually represent ratings.
- `.gitignore`: Added a comprehensive `.gitignore` file to prevent committing unnecessary files like build artifacts, logs, and local environment files.

### Fixed
- **Header Hydration Error:** Resolved a React hydration mismatch error by wrapping the header in a `ClientOnly` component, ensuring it only renders on the client side.
- **Missing "Get Directions" Button:** Restored the "Get Directions" button on the shop detail page, which was accidentally removed during a refactor.

### Changed
- Updated the core data models (`Shop`) to include a `reviews` array.
- Enhanced the mock data generator to create realistic-looking reviews for each shop.
- Updated the shop detail page to integrate the new `ShopReviews` component.
