import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c6d43e8f70b345e2aed62e5062058861'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8c01511622384714b3f372319b33c4ee'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '67da409c5f264b66b98156499ee8011b'
                    }
                    'demo-major-outage-london': {
                        table: 'x_2313668_pumkin_s_travel_request'
                        id: '510efc8bb41b4d4ba7b55f76f7172099'
                    }
                    'demo-querystring-berlin': {
                        table: 'x_2313668_pumkin_s_travel_request'
                        id: '256e37fc7ae443ae928129213a675df8'
                    }
                    'demo-rollbacks-austin': {
                        table: 'x_2313668_pumkin_s_travel_request'
                        id: 'a48531e768c444e688996914d1f84b59'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '2e7c465e4fc04423825ab2dccdc9f09e'
                        deleted: true
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'e05d3fed7e724a1e933200a18bff6209'
                    }
                    'tour-travel-menu': {
                        table: 'sys_app_application'
                        id: '6f69df8e643e429f9061f402db6652d1'
                    }
                    'travel-request-create': {
                        table: 'sys_security_acl'
                        id: '4239f3d698fd4470ab5e3b23616d9818'
                    }
                    'travel-request-delete-admin': {
                        table: 'sys_security_acl'
                        id: 'fe88410742d042ea8908d8706170dd28'
                    }
                    'travel-request-read': {
                        table: 'sys_security_acl'
                        id: 'bb0c1880e2144052b5b0fdb2dc12a83f'
                    }
                    'travel-request-write-admin': {
                        table: 'sys_security_acl'
                        id: 'ba2ee2a014ed482abc7e8cc625fe79c0'
                    }
                    'travel-request-write-own': {
                        table: 'sys_security_acl'
                        id: 'dfa63ae2cf6643cf838a66e60234c519'
                    }
                    'travel-requests-module': {
                        table: 'sys_app_module'
                        id: 'ba969d6960404a9c99cf7abd95f41c5f'
                    }
                    'tt-dashboard-widget': {
                        table: 'sp_widget'
                        id: '8cc464381dd64b8bbdc9f3f827d6e471'
                    }
                    'tt-detail-col': {
                        table: 'sp_column'
                        id: 'e537acba0afb4498b61263dbb991cc8f'
                    }
                    'tt-detail-container': {
                        table: 'sp_container'
                        id: '9d8dc0ff3bdc43af85d0cbfbd59397e5'
                    }
                    'tt-detail-instance': {
                        table: 'sp_instance'
                        id: 'f988f81bab814303acb702d520c5e36f'
                    }
                    'tt-detail-row': {
                        table: 'sp_row'
                        id: '8c4dc47309bc442fa281297bf8a92b92'
                    }
                    'tt-home-col': {
                        table: 'sp_column'
                        id: 'fd9b437a5f9f4099bd67402cae59a259'
                    }
                    'tt-home-container': {
                        table: 'sp_container'
                        id: '4ee366f24e024771b23b27ccf3d3ac60'
                    }
                    'tt-home-instance': {
                        table: 'sp_instance'
                        id: 'bcad8288f3cf479e9422e3967a8fee5b'
                    }
                    'tt-home-row': {
                        table: 'sp_row'
                        id: '15d2a72a38ab4f34882f65c8cdebc350'
                    }
                    'tt-menu-home': {
                        table: 'sp_rectangle_menu_item'
                        id: 'ff884ec255004d2ca90b088b0770a093'
                    }
                    'tt-menu-new': {
                        table: 'sp_rectangle_menu_item'
                        id: '58adc2a4014d440484ac9d94483c5379'
                    }
                    'tt-portal': {
                        table: 'sp_portal'
                        id: '91a26f33908d40e8bc4186ed75178a3a'
                    }
                    'tt-portal-menu': {
                        table: 'sp_instance_menu'
                        id: '5d719e32a88f4a3b835eab270afd1d03'
                    }
                    'tt-request-col': {
                        table: 'sp_column'
                        id: 'bf37810d03274430bd2000d6c07600ab'
                    }
                    'tt-request-container': {
                        table: 'sp_container'
                        id: 'a8509fe9e0724168a0e69dce9f686ecf'
                    }
                    'tt-request-detail-widget': {
                        table: 'sp_widget'
                        id: '9540057018204597aaa8376a0efc8b44'
                    }
                    'tt-request-form-widget': {
                        table: 'sp_widget'
                        id: '2a6fe72097cb44b398fd5a95cd652d4a'
                    }
                    'tt-request-instance': {
                        table: 'sp_instance'
                        id: '2588a1fa0fa1470abb53b4513a87bafe'
                    }
                    'tt-request-row': {
                        table: 'sp_row'
                        id: '70f3c427985e4d9f9bb187c4348ec736'
                    }
                    'tt-theme': {
                        table: 'sp_theme'
                        id: '3eece6e7d52f4a37a207d59ba7a0937e'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '01c5730ffbd444188a31cd39c285d0d0'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0227b474219e4e11b3eadab77b519b6e'
                        key: {
                            sys_ui_section: {
                                id: '1517f4df8b5c48978c45c284ab6f6e2a'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Travel Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'mileage_estimate'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0574f90c618f48a9986abf4bcae03bbf'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '07732148d14c41d89037a2124eeb79dd'
                        key: {
                            sys_ui_form: {
                                id: 'cd8348c4cad0435fa7a71f92e3a96904'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '9d127abd64064a15890fd23966639ee2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Justification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bad2362526343878150c82b7fed3fa9'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f959753c38c479885c98bbdb877d6d9'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                            value: 'personal_vehicle'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1517f4df8b5c48978c45c284ab6f6e2a'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            caption: 'Travel Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1638212e98a646a68c11c1c21039e5a8'
                        key: {
                            ui_policy: {
                                id: '36cce2fab9454d31ae6824a5f2fdf71f'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'No transportation selected: hide mode-specific fields'
                                }
                            }
                            field: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c790468aed64b56944aa69a6536b778'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                            value: 'premium_economy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1c81a34ebabd4202839420360687eb0a'
                        key: {
                            sys_ui_section: {
                                id: '38c4d59a143c415b83f5bd5b009a6f08'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'International Travel'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'visa_required'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20dc9b2705384e50875b592c67372de0'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            value: 'recording_session'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '25ef0450874c478c8453ccb8b5d54345'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '268442a20bdd40a987d4991ef4f512bf'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'estimated_total_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '26b369912a084158973fc0d935b8275a'
                        key: {
                            ui_policy: {
                                id: 'a9f1f1f737124759b11a2e97f72d3572'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Personal Vehicle: show Mileage estimate'
                                }
                            }
                            field: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2919d873c5194d268b7140debb2e9dc5'
                        key: {
                            sys_ui_section: {
                                id: '1517f4df8b5c48978c45c284ab6f6e2a'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Travel Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'flight_class'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b91baacf69d479f990278efdeb842cd'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                            value: 'compact'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2c1b7ad908ae4ca1bdf5a9bfdc425f14'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c67a9cdb077401dbbe7ce38fdcac974'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2effff74264a473d9800bfcd2e065167'
                        key: {
                            name: 'x_2313668_pumkin_s/main.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33d360d76f9545f195df85e07e941f0d'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '36cce2fab9454d31ae6824a5f2fdf71f'
                        key: {
                            table: 'x_2313668_pumkin_s_travel_request'
                            short_description: 'No transportation selected: hide mode-specific fields'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '38c4d59a143c415b83f5bd5b009a6f08'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            caption: 'International Travel'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '402121d06cfc4637829ccc18a0b11398'
                        key: {
                            application_file: 'c6ddffe04baf455d8e777f291bf0b8a8'
                            source_artifact: 'ce3a86a32cc64eae8023502ed6f9c30f'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41826fea016444be93fce4fe2952ca2b'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                            value: 'full_size'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '422434ee766c4a789c0113f8bac730f0'
                        key: {
                            ui_policy: {
                                id: '36cce2fab9454d31ae6824a5f2fdf71f'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'No transportation selected: hide mode-specific fields'
                                }
                            }
                            field: 'flight_class'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4445642772a9425aa45d97ff335b804a'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a0dd77ad16c487586072e626954bf2b'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'visa_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '4a54e5baf7a14308806251f46f194884'
                        key: {
                            table: 'x_2313668_pumkin_s_travel_request'
                            short_description: 'Transportation = Flight: show Flight class'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '50182c63286d4ebc810b8b4ed6a7fb7e'
                        key: {
                            sys_ui_form: {
                                id: 'cd8348c4cad0435fa7a71f92e3a96904'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '38c4d59a143c415b83f5bd5b009a6f08'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'International Travel'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5883ed7e228d4336b878f455f0aa353c'
                        key: {
                            ui_policy: {
                                id: 'a9f1f1f737124759b11a2e97f72d3572'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Personal Vehicle: show Mileage estimate'
                                }
                            }
                            field: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '58f59b67b9b64d0c95dcf8b9c81f173b'
                        key: {
                            sys_security_acl: 'ba2ee2a014ed482abc7e8cc625fe79c0'
                            sys_user_role: {
                                id: '78b560516a174c1aaadb8909bf45c553'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '59cdc5f5a769494ca5cb8a6d9ee7688c'
                        key: {
                            sys_security_acl: 'fe88410742d042ea8908d8706170dd28'
                            sys_user_role: {
                                id: '78b560516a174c1aaadb8909bf45c553'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ac8cc06fcb347cca1ba84daca53020f'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6302298e03c54cf3b6d4fc575ebeb75c'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '637c8a5838664376a8f0a42537a48d7d'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64eeecc264e04d99956b927eb7f97c34'
                        key: {
                            sys_ui_section: {
                                id: '38c4d59a143c415b83f5bd5b009a6f08'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'International Travel'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'international_trip'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6559103580584b4da31215e24c6c1523'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            value: 'promo_appearance'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6de11956a1c747f4a26ce673b768c31a'
                        key: {
                            ui_policy: {
                                id: '4a54e5baf7a14308806251f46f194884'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Flight: show Flight class'
                                }
                            }
                            field: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e4c0954fb3e4d79a48198279c47d000'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'mileage_estimate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6ef82706377345faa4a4e41dd7fba820'
                        key: {
                            ui_policy: {
                                id: '4a54e5baf7a14308806251f46f194884'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Flight: show Flight class'
                                }
                            }
                            field: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70226faf79b44127ac495e0e1d1d59e3'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '70f28df7aa474887a4085e62a93b0f5c'
                        key: {
                            table: 'x_2313668_pumkin_s_travel_request'
                            short_description: 'Transportation = Car Rental: show Rental car size'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '73543cbbe1fa435f89b8dd6ea6fe8951'
                        key: {
                            ui_policy: {
                                id: 'c2b497ae2b64438081ab5627c14804a0'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'International trip: show passport and visa fields'
                                }
                            }
                            field: 'visa_required'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73ca7b4d59224484b04fa87aba274436'
                        key: {
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'purpose'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75d616338bb342a4a5de389fc61cbd19'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7790abe7bd37418eb3066487e15ab2e0'
                        key: {
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'return_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '783ba05ed67847a98913a0d147ffc878'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '78fbd2983e104535bc5ed9eaea00eff1'
                        key: {
                            application_file: 'e63bcc491efc4b4c889ec6adbfc0430d'
                            source_artifact: 'ce3a86a32cc64eae8023502ed6f9c30f'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '790fa48920ce4d8788860a8a61e8c96b'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7cfbda54bd1341e19ce9f3777b269555'
                        key: {
                            application_file: '2effff74264a473d9800bfcd2e065167'
                            source_artifact: 'ce3a86a32cc64eae8023502ed6f9c30f'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7daa44abd0634d5c93b7821b9b11e5c6'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                            value: 'suv'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e6756763bf544eb9cbfe44e0877eea3'
                        key: {
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'departure_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '83890675e6404533a546c0ea18f18cae'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '89ffa377bc474421afe4ceaca9a45ab6'
                        key: {
                            ui_policy: {
                                id: 'a9f1f1f737124759b11a2e97f72d3572'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Personal Vehicle: show Mileage estimate'
                                }
                            }
                            field: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8e57f72e1bc44c9b9da62adf69e7e8ea'
                        key: {
                            sys_ui_form: {
                                id: 'cd8348c4cad0435fa7a71f92e3a96904'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1517f4df8b5c48978c45c284ab6f6e2a'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Travel Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e7d5bd2b2ca46fe9aa6343f0d6cb032'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            value: 'festival'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8fe0ff6bb8cf4578a6abccc65876ed15'
                        key: {
                            sys_ui_form: {
                                id: 'cd8348c4cad0435fa7a71f92e3a96904'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '941a438ba2814696828676a2513a776d'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                            value: 'car_rental'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94b99f5c114e42e5b20ad777bdb709a8'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                            value: 'mid_size'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '973268505b044ab8b3c48468c4687321'
                        key: {
                            sys_ui_section: {
                                id: '1517f4df8b5c48978c45c284ab6f6e2a'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Travel Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'transportation'
                            position: '0'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '98a6ae0d1e234a2c805463ffa228014a'
                        key: {
                            id: 'x_2313668_pumkin_s_request'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9d127abd64064a15890fd23966639ee2'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            caption: 'Justification'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9da2e5889cbf4f40a591a7dbec4d477c'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                            value: 'business'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f0f308c74d1460184992468feb8a5c5'
                        key: {
                            sys_ui_section: {
                                id: '38c4d59a143c415b83f5bd5b009a6f08'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'International Travel'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'passport_expiration_date'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1d170e05c554c2490c2f465311c8430'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'passport_expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4bb747f49f5404bbe7c4d66f89d692d'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6c794165b0b4709b43529c60430613a'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'international_trip'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'a9f1f1f737124759b11a2e97f72d3572'
                        key: {
                            table: 'x_2313668_pumkin_s_travel_request'
                            short_description: 'Transportation = Personal Vehicle: show Mileage estimate'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac32769ade264d32ace4c66f4658e079'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ad4216f12b414c12babadd3fa4107b9a'
                        key: {
                            ui_policy: {
                                id: '70f28df7aa474887a4085e62a93b0f5c'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Car Rental: show Rental car size'
                                }
                            }
                            field: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aeb20e4c2e5648d9a20b80b6af7cdd45'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b25923e91aa34ce8a9e8b7b2caf2e05e'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b3c2eda68b8946f0a41176dea4e6a1ab'
                        key: {
                            ui_policy: {
                                id: 'c2b497ae2b64438081ab5627c14804a0'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'International trip: show passport and visa fields'
                                }
                            }
                            field: 'passport_expiration_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b43ab88917db4d55b81ac4cbaebcb225'
                        key: {
                            sys_ui_section: {
                                id: '1517f4df8b5c48978c45c284ab6f6e2a'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Travel Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'rental_car_size'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b74dfdcf202c4c0d8d5648c7bd07e5ee'
                        key: {
                            sys_ui_section: {
                                id: '9d127abd64064a15890fd23966639ee2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Justification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_total_cost'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'bc4145ed0f2e4150ab37f5389db2732e'
                        key: {
                            ui_policy: {
                                id: '4a54e5baf7a14308806251f46f194884'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Flight: show Flight class'
                                }
                            }
                            field: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf43bfff2d7c4e508f294f2d114b2760'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'c2b497ae2b64438081ab5627c14804a0'
                        key: {
                            table: 'x_2313668_pumkin_s_travel_request'
                            short_description: 'International trip: show passport and visa fields'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'c6ddffe04baf455d8e777f291bf0b8a8'
                        key: {
                            name: 'x_2313668_pumkin_s/main'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c7ba83b896384f8890a53d0105a8c1a2'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            caption: 'Trip Basics'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cd8348c4cad0435fa7a71f92e3a96904'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'ce3a86a32cc64eae8023502ed6f9c30f'
                        key: {
                            name: 'x_2313668_pumkin_s_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd022c261526648b09361dc7a0c957547'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'purpose'
                            value: 'tour_leg'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd36d8d0a0ee8487eaa13ca7c336113dc'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4317e7a17b64350b3fc2aa2e9f46d80'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                            value: 'economy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4bc72ace25749c4bb2e943b0ab36629'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'transportation'
                            value: 'flight'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd73fcf26667e44faa1a0aabe6bc54f98'
                        key: {
                            ui_policy: {
                                id: '70f28df7aa474887a4085e62a93b0f5c'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Car Rental: show Rental car size'
                                }
                            }
                            field: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'daec540d55734fafbddb10af1aec10fb'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'passport_expiration_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de420399cddf4b6a858f443c2d976bf4'
                        key: {
                            sys_ui_section: {
                                id: '9d127abd64064a15890fd23966639ee2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Justification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_justification'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de99f3693494420da0225ee5934780c3'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e09ddbfabfb24a6fb04d06aaa9038fb5'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'estimated_total_cost'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e203d06198264c5ab20bed82c6f45150'
                        key: {
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e40630473a9346d8a06dbe292443dc57'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'flight_class'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5d173029447479a98b0eb4e919f3b44'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'rental_car_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'e63bcc491efc4b4c889ec6adbfc0430d'
                        key: {
                            endpoint: 'x_2313668_pumkin_s_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e909da85b1a243038fbaf2bc458d02de'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea020f317a53491a833a27ec22d899af'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'international_trip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efc9c8279f4b43fba8b1388d83bbecc5'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'visa_required'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2c4dacdbd1a49748c64bd59795de603'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3446395a0b44c24bcacb9e6c1e44f0a'
                        key: {
                            name: 'x_2313668_pumkin_s_travel_request'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'f58ff61cad0343969497efe8885adddf'
                        key: {
                            id: 'x_2313668_pumkin_s_home'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f8a779c4ec2e4a959978409e004da772'
                        key: {
                            ui_policy: {
                                id: '36cce2fab9454d31ae6824a5f2fdf71f'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'No transportation selected: hide mode-specific fields'
                                }
                            }
                            field: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'fb8f59d1bf4b4e9989acb9f3e94403af'
                        key: {
                            id: 'x_2313668_pumkin_s_detail'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ff6e3b4feaaa457c8bd5e7141610b797'
                        key: {
                            ui_policy: {
                                id: '70f28df7aa474887a4085e62a93b0f5c'
                                key: {
                                    table: 'x_2313668_pumkin_s_travel_request'
                                    short_description: 'Transportation = Car Rental: show Rental car size'
                                }
                            }
                            field: 'mileage_estimate'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff8d35ac28e64eee8aac7a648a7699a2'
                        key: {
                            sys_ui_section: {
                                id: 'c7ba83b896384f8890a53d0105a8c1a2'
                                key: {
                                    name: 'x_2313668_pumkin_s_travel_request'
                                    caption: 'Trip Basics'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'destination_city'
                            position: '2'
                        }
                    },
                ]
            }
        }
    }
}
