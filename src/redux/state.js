import renderEntireTree from "../render";

const state = {
  navBar: {
    items: [
      'News',
      'Profile',
      'Messages',
      'Communities',
      'Spots',
      'Clinics',
      'Instructors',
      'Map',
      'Settings'
    ],
    bestFriends: [
      1, 2, 3
    ]
  },

  newsPage: {

  },
  profilePage: {
    posts: [
      {
        title: 'Hello World',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque vitae quod at maiores labore quo saepe eaque rerum, excepturi ipsam architecto. Labore voluptatum quas iusto pariatur repellendus modi. Possimus, temporibus?',
        like: 3,
        dislike: 1,
        comments: [
          { id: 2, comment: 'wow, I cannot find you' },
          { id: 3, comment: 'I agree' }
        ]
      },
      {
        title: 'Post post',
        text: 'Now this quiet courtyard, Sunday afternoon, this girl with a luminous digital display wired to a subcutaneous chip. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century. They floated in the dark, curled in his sleep, and wake alone in the tunnel’s ceiling. They floated in the human system. He woke and found her stretched beside him in the Japanese night like live wire voodoo and he’d cry for it, cry in his jacket pocket. Case felt the edge of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. A Dali clock hung on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Now this quiet courtyard, Sunday afternoon, this girl with a hand on his chest.',
        like: 3,
        dislike: 1,
        comments: [
          { id: 2, comment: 'wow, I cannot find you' },
          { id: 3, comment: 'Sunday afternoon' }
        ]
      },
      {
        title: 'Get started',
        text: 'A narrow wedge of light from a half-open service hatch at the twin mirrors. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Still it was a long strange way home over the black water and the dripping chassis of a painted jungle of rainbow foliage, a lurid communal mural that completely covered the hull of the car’s floor. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the drifting shoals of waste. The Sprawl was a steady pulse of pain midway down his spine. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a heroin factory. After the postoperative check at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console.',
        like: 3,
        dislike: 1,
        comments: [
          { id: 3, comment: 'They were dropping, losing altitude' },
          { id: 4, comment: 'I agree' }
        ]
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        text: 'Now this quiet courtyard, Sunday afternoon, this girl with a luminous digital display wired to a subcutaneous chip. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the spherical chamber. Before they could stampede, take flight from the banks of every computer in the coffin for Armitage’s call. The alarm still oscillated, louder here, the rear of the bright void beyond the chain link. The alarm still oscillated, louder here, the rear wall dulling the roar of the blowers and the amplified breathing of the fighters. It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a junked console. The alarm still oscillated, louder here, the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. He woke and found her stretched beside him in the center of his closed left eyelid. All the speed he took, all the turns he’d taken and the amplified breathing of the Villa bespeak a turning in, a denial of the bright void beyond the hull.',
        like: 3,
        dislike: 1,
        comments: [
          { id: 1, comment: 'Before they could stampede' },
          { id: 4, comment: 'Now this quiet courtyard' }
        ]
      }
    ]
  },
  messagesPage: {
    dialogs: [ // users
      { name: 'Liza', id: 1 },
      { name: 'Dima', id: 2 },
      { name: 'Valek', id: 3 },
      { name: 'Friend', id: 4 },
    ],

    dialog: [ // messages
      {
        id: 1, messages:
          [
            { id: 1, message: 'Still it was a square of faint light.' },
            { id: 5, message: 'get up' },
            { id: 1, message: 'Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes.' },
          ]
      },
      {
        id: 2, messages:
          [
            { id: 2, message: 'the Sprawl’s towers and ragged Fuller domes.' },
            { id: 2, message: 'Hello-Wats up' },
            { id: 5, message: 'Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes.' },
          ]
      },
      {
        id: 3, messages:
          [
            { id: 5, message: ' a square of faint light.' },
            { id: 3, message: 'Wats up' },
            { id: 3, message: 'blabla' },
          ]
      },
      {
        id: 4, messages:
          [
            { id: 4, message: ' was a square of faint light.' },
            { id: 4, message: 'Hello' },
            { id: 5, message: 'Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes.' },
          ]
      },
    ]
  },
  communitiesPage: {

  },
  spotsPage: {

  },
  clinicsPage: {

  },
  instructorsPage: {

  },
  mapPage: {

  },
  settingsPage: {

  },

  users: [
    { id: 1, name: 'Liza', scndName: 'Kutyrsina', friends: [2, 3, 4, 5] },
    { id: 2, name: 'Dima', scndName: 'Kutyrsin', friends: [1, 3, 4, 5] },
    { id: 3, name: 'Valek', scndName: 'Romanov', friends: [2, 1, 4, 5] },
    { id: 4, name: 'Friend', scndName: 'Friendoff', friends: [2, 3, 1, 5] },
    { id: 5, name: 'Cootook', scndName: 'Ku', friends: [2, 3, 4, 1] },
  ]
}

export const addPost = (postMessage) => {
  const newPost = {
    title: '',
    text: postMessage,
    like: 0,
    dislike: 0,
    comments: []
  }

  state.profilePage.posts.unshift(newPost);

  renderEntireTree(state);
};
export default state;