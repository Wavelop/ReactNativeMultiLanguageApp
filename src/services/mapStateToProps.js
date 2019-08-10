const mapStateToProps = (state) => {
	return {
		navigationData: state.NavigationReducers,
		intlData: state.IntlReducers
	};
};

export default mapStateToProps;
