steps = [

    [
        """
    CREATE TABLE accounts(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(200) NOT NULL,
    full_name VARCHAR(50) NOT NULL,
    hashed_password VARCHAR(250) NOT NULL,
    disabled BOOLEAN DEFAULT FALSE
    )
        """,
    """
    DROP TABLE accounts;
    """
    ],

    [
        """
    CREATE TABLE appointment_type(
    id SERIAL PRIMARY KEY NOT NULL,
    type_name VARCHAR(200) UNIQUE NOT NULL,
    duration TIME NOT NULL
    );
        """,
    """
    DROP TABLE appointment_type;
    """
    ],

    [
        """
    CREATE TABLE appointments(
    id SERIAL PRIMARY KEY NOT NULL,
    client_name VARCHAR(200) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    appointment_type_id INTEGER REFERENCES appointment_type(id),
    account_id INTEGER REFERENCES accounts(id)
    )
        """,
    """
    DROP TABLE appointments;
    """
    ],

]
