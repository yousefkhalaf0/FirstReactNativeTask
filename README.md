# React Native Card App

## Description
This is a simple React Native app that allows users to add and delete text-based cards. It features a text input field for entering a title, a button to add the title as a card, and a scrollable list displaying the created cards with an option to delete them.

## Features
- Add new cards with a title.
- Display cards in a scrollable list.
- Delete cards individually.
- Basic input validation to prevent empty entries.

## Technologies Used
- React Native
- TypeScript (for strong type checking)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <project-folder>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npx expo start
   ```

## Usage
1. Enter a title in the input field.
2. Press the "Add" button to create a new card.
3. Scroll through the list to view all added cards.
4. Press the "Delete" button on any card to remove it.

## File Structure
```
.
├── App.tsx      # Main application file
├── package.json # Project dependencies
├── tsconfig.json # TypeScript configuration
└── README.md    # Project documentation
```

## Future Improvements
- Add persistent storage using AsyncStorage.
- Implement animations for adding and deleting cards.
- Enhance UI/UX with styled components.

## License
This project is licensed under the MIT License.
