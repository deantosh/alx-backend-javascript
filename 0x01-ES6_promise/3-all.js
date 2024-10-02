import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  return Promise.all(promises)
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
