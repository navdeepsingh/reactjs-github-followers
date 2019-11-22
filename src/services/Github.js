/**
 * @class GithubService
 * @description A central service for all of the operations related to the Github Api.
 * 
 */
export default class GithubService {
  static getFollowersOfUser = async userName => {
    try {
      return await fetch(`https://api.github.com/users/${userName}/followers`)
        .then(res => {
          if (res.status === 404) throw new Error("User not found")
          else if (res.status !== 200) throw new Error('Something Wrong.')
          else return res.json();
        })
    }
    catch (err) {
      throw new Error(err);
    }
  }
}