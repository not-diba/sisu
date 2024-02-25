import React from 'react';
import {Hero} from "@/components/site/hero";
import CompaniesCourasel from "@/components/site/companies_courasel";
import Tagline from "@/components/site/tagline";
import Products from "@/components/site/products";
import Services from "@/components/site/services";
import Prices from "@/components/site/prices";
import Footer from "@/components/site/footer";
const Site = () => {
    return (
        <div className="w-full h-full pt-16">
            <Hero />
            <CompaniesCourasel />
            <Tagline />
            <Products />
            <Services />
            <Prices />
            <Footer />
        </div>
    );
};

export default Site;