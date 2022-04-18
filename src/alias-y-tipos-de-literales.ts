(() => {
  type UserID = string | number;
  let userīd: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';

  // shirtsize = 's';
  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${ userId.toLowerCase() }`);
    }
  }
  greeting(1111, 'S');
  greeting('odekc', 'M');
})();
