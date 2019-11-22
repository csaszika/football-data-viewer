import { competitionsData } from '../../test-data/mock';
import { getCompetitions, loadCompetitions, loadCompetitionsFailed } from './actions';
import { initialState, reducer } from './reducer';
import { snapshotMap } from './snapshots';

describe('Competition reducer', () => {
  const initAction = { type: '@@init' };

  it('should match with new snapshot', () => {
    const getCompetitionsAction = getCompetitions();

    const state = [initAction, getCompetitionsAction].reduce(reducer, initialState());

    expect(state).toEqual(snapshotMap.get(getCompetitionsAction.type));
  });

  it('should load competitions into store', () => {
    const firstThreeElementBoundary = 3;
    const loadCompetitionsAction = loadCompetitions({ competitions: competitionsData.competitions.slice(0, firstThreeElementBoundary) });

    const state = [initAction, loadCompetitionsAction].reduce(reducer, initialState());

    expect(state).toEqual(snapshotMap.get(loadCompetitionsAction.type));
  });

  it('should load competitions failed into store', () => {
    const loadFailedCompetitionsAction = loadCompetitionsFailed();

    const state = [initAction, loadFailedCompetitionsAction].reduce(reducer, initialState());

    expect(state).toEqual(snapshotMap.get(loadFailedCompetitionsAction.type));
  });
});
