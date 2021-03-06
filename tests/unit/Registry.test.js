( function ( oo ) {

	QUnit.module( 'Registry' );

	QUnit.test( 'register', 3, function ( assert ) {
		var registry = new oo.Registry();

		registry.register( 'registry-item-1', 1 );
		registry.register( [ 'registry-item-2', 'registry-item-3' ], 23 );

		assert.strictEqual( registry.lookup( 'registry-item-1' ), 1 );
		assert.strictEqual( registry.lookup( 'registry-item-2' ), 23 );
		assert.strictEqual( registry.lookup( 'registry-item-3' ), 23 );
	} );

	QUnit.test( 'lookup', 6, function ( assert ) {
		var registry = new oo.Registry();

		registry.register( 'registry-item-1', 1 );

		assert.strictEqual( registry.lookup( 'registry-item-1' ), 1 );
		assert.strictEqual( registry.lookup( 'registry-item-2' ), undefined );

		assert.strictEqual( registry.lookup( 'hasOwnProperty' ), undefined );
		assert.strictEqual( registry.lookup( 'prototype' ), undefined );

		registry.register( 'hasOwnProperty', 50 );
		assert.strictEqual( registry.lookup( 'hasOwnProperty' ), 50 );

		registry.register( 'prototype', 20 );
		assert.strictEqual( registry.lookup( 'prototype' ), 20 );
	} );

}( OO ) );
