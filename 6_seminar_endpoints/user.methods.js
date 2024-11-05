const users = require("./user");

const usersMethods = (() => {
  const dbUsers = [...users];

  return {
    findMany: async (filters = {}) => {
      return new Promise((resolve, reject) => {
        let copyUsers = [...dbUsers];

        if (filters.age) {
          copyUsers = copyUsers.filter(
            (user) => user.age === Number(filters.age)
          );
        }

        if (filters.name) {
          copyUsers = copyUsers.filter((user) => user.name === filters.name);
        }

        resolve(copyUsers);
      });
    },

    deleteOne: async (id) => {
        return new Promise((resolve, reject) => {
            const copyUsers = [...dbUsers];
            const userIndex = copyUsers.findIndex(user => user.id === id);

            if(userIndex === -1) {
                reject('User not found');
            }

            copyUsers.splice(userIndex, 1);

            resolve();
        });
    }
  };
})();

module.exports = usersMethods;
