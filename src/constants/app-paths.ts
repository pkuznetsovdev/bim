export const APP_PATH_PARAMS = {
  petId: 'petId',
  postId: 'postId',
} as const;

export const APP_PATHS = {
  root: '/',
  home: '/posts',
  user: '/user',
  posts: '/posts',
  postNew: '/post/new',
  petNew: '/pet/new',
  petDetails: `/pets/:${APP_PATH_PARAMS.petId}`,
  postDetails: `/posts/:${APP_PATH_PARAMS.postId}`,
  protectedRouteRedirect: '/',
} as const;
