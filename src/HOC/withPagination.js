import React, { Component } from 'react';

// This HOC wraps a component and adds pagination functionality to it, by
// keeping track of an activePage, it will pass down only a slice of the
// collection corresponding to that page.
//
// How you show that collection is up to you, this HOC only provides the logic
// to paginate.
//
// A suggestion is to write your own presentational component for pagination,
// or use a library like react-js-paginate, which has (only) the presentational
// component ready to use with this HOC.
const withPagination = (WrappedComponent, { itemsCountPerPage }) => {
  // This is done so that the WrappedComponent can still be passed a collection
  // in a semantic manner, e.g. <Companies companies={companies} />, as opposed
  // to requiring to pass something like <Companies items={companies} />.
  // Mainly because the user of the WrappedComponent won't know it has been
  // wrapped withPagination.
  const collectionName = WrappedComponent.name
    .split(/(?=[A-Z])/)[0]
    .toLowerCase();

  return class extends Component {
    state = {
      activePage: 1
    };

    handlePageChange = pageNumber => {
      this.setState({ activePage: pageNumber });
    };

    render() {
      const collection = this.props[collectionName];

      if (!collection)
        throw new Error(`Invalid collection name. If your component is called
          ${WrappedComponent.name}, the collection you pass as props should be
          the first part of the name e.g. <Reviews reviews={reviews} />.
          Instead of <Reviews somethings={reviews}/>.`);

      const lastIndex = this.state.activePage * itemsCountPerPage;
      const firstIndex = lastIndex - itemsCountPerPage;
      const shownItems = this.props[collectionName].slice(
        firstIndex,
        lastIndex
      );

      return (
        <WrappedComponent
          paginationData={{
            handlePageChange: this.handlePageChange,
            activePage: this.state.activePage,
            totalItemsCount: this.props[collectionName].length,
            itemsCountPerPage,
            shownItems
          }}
          {...this.props}
        />
      );
    }
  };
};

export default withPagination;
