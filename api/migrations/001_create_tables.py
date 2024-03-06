steps = [

    [
        """
    CREATE TABLE appointment_types(
    id SERIAL PRIMARY KEY NOT NULL,
    type_name VARCHAR(200) UNIQUE NOT NULL,
    duration INTERVAL NOT NULL
    );
        """,
    """
    DROP TABLE appointment_types;
    """
    ],
    [
        """
    CREATE TABLE appointments(
    id SERIAL PRIMARY KEY NOT NULL,
    client_name VARCHAR(200) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    appointment_type VARCHAR(200) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    appointment_types_id INTEGER REFERENCES appointment_types(id)
    )
        """,
    """
    DROP TABLE appointments;
    """
    ],
]
