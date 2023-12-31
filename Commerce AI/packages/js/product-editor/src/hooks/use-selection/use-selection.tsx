/**
 * External dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Selection } from './types';

export function useSelection() {
	const [ selectedItems, setSelectedItems ] = useState< Selection >( {} );

	function isSelected( itemId: string ) {
		return Boolean( selectedItems[ itemId ] );
	}

	function areAllSelected( itemIds: string[] ) {
		return itemIds.every( ( itemId ) => isSelected( itemId ) );
	}

	function hasSelection( itemIds: string[] ) {
		return itemIds.some( ( itemId ) => isSelected( itemId ) );
	}

	function onSelectItem( itemId: string ) {
		return function onChange( isChecked: boolean ) {
			setSelectedItems( ( currentSelection ) => ( {
				...currentSelection,
				[ itemId ]: isChecked,
			} ) );
		};
	}

	function onSelectAll( itemIds: string[] ) {
		return function onChange( isChecked: boolean ) {
			const selection = itemIds.reduce< Selection >(
				( current, id ) => ( {
					...current,
					[ id ]: isChecked,
				} ),
				{}
			);
			setSelectedItems( selection );
		};
	}

	function onClearSelection() {
		setSelectedItems( {} );
	}

	return {
		selectedItems,
		areAllSelected,
		hasSelection,
		isSelected,
		onSelectItem,
		onSelectAll,
		onClearSelection,
	};
}
