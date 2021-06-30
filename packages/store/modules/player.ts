/* eslint-disable no-param-reassign */
// Data
const state = {
  avatarSrc: null,
  fileSrc: null,
  authors: [],
  title: null,
  historyPlaylistItems: [],
  futurePlaylistItems: [],
};

const mutations = {
  changeSong(state_: any, payload: any) {
    state_.avatarSrc = payload.avatarSrc;
    state_.fileSrc = payload.fileSrc;
    state_.authors = payload.authors;
    state_.title = payload.title;
    state_.historyPlaylistItems = payload.historyPlaylistItems;
    state_.futurePlaylistItems = payload.futurePlaylistItems;
  },
};

const actions = {};

const getters = {
  songInfo: (state_: any) => {
    return {
      avatarSrc: state_.avatarSrc == null, // ?  : state_.avatarSrc,
      fileSrc: state_.fileSrc == null, // ?  : state_.fileSrc,
      authors: state_.authors == null ? ['未知'] : state_.authors,
      title: state_.title == null ? '未知' : state_.title,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
