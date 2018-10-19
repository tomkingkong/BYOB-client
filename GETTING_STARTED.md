### Getting Started

This is a general guide to setting up an Sellers Cellars development environment on your local machine.

### Dependencies

* PostgreSQL database
* Knex
* Node

### Get it

After running `npm i`:

If you're planning on contributing code to the project (which we encourage), it is a good idea to begin by forking this repo using the `Fork` button in the top-right corner of this screen. You should then be able to use `git clone` to copy your fork onto your local machine.

    git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/BYOB-client

Jump into your new local copy of the Sellers Cellars:

    cd BYOB-client

And then add an `upstream` remote that points to the main repo:

    git remote add upstream https://github.com/BYOB-client/BYOB-client

Fetch the latest version of `master` from `upstream` (ie. the main repo):

    git fetch upstream master

### Get it running

First, you need to create the database vitis_vinifera the app will use by manually typing the following in your terminal:

```sh
$ sudo -u postgres psql -c "CREATE DATABASE vitis_vinifera"
```

After the database has been created, run `knex seed:run` to populate tables, vineyards and wines with data.

If still you get stuck do not hesitate to open an issue reporting the full output of the script.

### Testing

To run the test suite, first prepare the test database:

    `CREATE DATABASE vitis_vinifera_test`

Then populate the tables with:

    `knex seed:run --env test`
    
Then run the tests with:

    `npm t`


[developer-wiki]: https://github.com/openfoodfoundation/openfoodnetwork/wiki
[sierra]: https://github.com/openfoodfoundation/openfoodnetwork/wiki/Development-Environment-Setup:-macOS-(Sierra)
[el-capitan]: https://github.com/openfoodfoundation/openfoodnetwork/wiki/Development-Environment-Setup:-OS-X-(El-Capitan)
[ubuntu]: https://github.com/openfoodfoundation/openfoodnetwork/wiki/Development-Environment-Setup:-Ubuntu
[wiki]: https://github.com/openfoodfoundation/openfoodnetwork/wiki
[zeus]: https://github.com/burke/zeus
[rubocop]: https://rubocop.readthedocs.io/en/latest/
[karma]: https://github.com/openfoodfoundation/openfoodnetwork/wiki/Karma
