export enum FilterState {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

type Props = {
  filterValue: FilterState;
  setFilterValue: (newValue: FilterState) => void;
  searchQuery: string;
  setSearchQuery: (newQuery: string) => void;
};

export const TodoFilter: React.FC<Props> = ({
  filterValue,
  setFilterValue,
  searchQuery,
  setSearchQuery,
}) => {
  function handleFilterChanged(newFilterValue: string) {
    setFilterValue(newFilterValue as FilterState);
  }

  function handleSearchChanged(newQuery: string) {
    setSearchQuery(newQuery);
  }

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filterValue}
            onChange={event => handleFilterChanged(event.target.value)}
          >
            <option value={FilterState.All}>All</option>
            <option value={FilterState.Active}>Active</option>
            <option value={FilterState.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={event => handleSearchChanged(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {searchQuery && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => handleSearchChanged('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
