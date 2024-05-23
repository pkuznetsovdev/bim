export const APP_PATH_PARAMS = {
  petId: 'petId',
  postId: 'postId',
} as const;

export const APP_PATHS = {
  root: '/',
  user: '/user',
  // signUp: '/sign-up',
  // pets: '/pets',
  // posts: '/posts',
  // details: '/details',
  petNew: '/pets/new',
  petDetails: `/pets/:${APP_PATH_PARAMS.petId}`,
  postNew: '/posts/new',
  postDetails: `/posts/:${APP_PATH_PARAMS.postId}`,
  protectedRouteRedirect: '/',
} as const;
