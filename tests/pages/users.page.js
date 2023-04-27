import Page from "./page.js";

class UsersPage extends Page {
  get usersItems() {
    return $$("#user-item");
  }

  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }   
                        
  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
        const usersCount = await this.usersItems.length;

        if(!usersCount) {
            throw new Error('Пользователи не найдены')
        }

        await this.usersItems[0].$('#delete-user').click();

        const usersCountAfterDelete = await this.usersItems.length;

        if(usersCount - usersCountAfterDelete !== 1) {
            throw new Error('Удаление не произошло или удалился более чем 1 пользователь');
        }

    } catch (e) {
        throw new Error('Не удалось удалить пользователя. ' + e.message)
    }
}

  open() {
    return super.open("users");
  }
}

export default new UsersPage();
