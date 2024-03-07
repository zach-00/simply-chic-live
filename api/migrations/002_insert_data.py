steps = [
    [
        """
    INSERT INTO appointment_type(type_name, duration)
    VALUES
    ('Hair Extensions', '01:30:00'),
    ('Hair Color/Bleach', '02:00:00'),
    ('Hair Trim', '00:45:00'),
    ('Eyelash Extension Fill', '00:30:00'),
    ('Eyelash Extension Full Set', '01:00:00')
        """,
    """
    """,
    ],

    [
        """
    INSERT INTO accounts(username, full_name, hashed_password, disabled)
    VALUES
    ('user@email.com', 'Jamie Johnson', '23br872br28b', False),
    ('name@email.com', 'Billy Walker', 'jkqhfd7qedh', False),
    ('account@email.com', 'Amy Miller', 'kudsf89wefh', False)
        """,
        """
        """,
    ],
]
