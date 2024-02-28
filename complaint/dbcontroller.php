<?php

class DBController
{
    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $dbname = 'complaint';
    private $conn;

    public function __construct()
    {
        $this->conn = $this->connectDB();
    }

    public function connectDB()
    {
        $conn = mysqli_connect($this->host, $this->user, $this->pass, $this->dbname);

        mysqli_set_charset($conn, 'utf8');

        if (!$conn) {
            die('Connection failed: ' . mysqli_connect_error());
        }

        return $conn;
    }

    public function runQuery($query)
    {
        $result = mysqli_query($this->conn, $query);
        $resultset = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $resultset[] = $row;
        }

        return $resultset;
    }

    public function numRows($query)
    {
        $result = mysqli_query($this->conn, $query);
        $rowcount = mysqli_num_rows($result);

        return $rowcount;
    }
}

$dbController = new DBController();
