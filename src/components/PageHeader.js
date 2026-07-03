import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function PageHeader({ title }) {
    const location = useLocation();

    // Split URL path
    const pathnames = location.pathname.split("/").filter(x => x);

    // Format slug into readable title
    const formatTitle = (str) => {
        return str
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className="breadcrumb-section">
            <div className="container">

                <h1 className="breadcrumb-title">
                    {title
                        ? title
                        : pathnames.length > 0
                            ? formatTitle(pathnames[pathnames.length - 1])
                            : "Home"}
                </h1>

                <div className="breadcrumb-links">
                    <Link to="/">Home</Link>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <span key={to}>
                                {" / "}
                                {isLast ? (
                                    <span className="active">
                                        {title ? title : formatTitle(value)}
                                    </span>
                                ) : (
                                    <Link to={to}>
                                        {formatTitle(value)}
                                    </Link>
                                )}
                            </span>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}