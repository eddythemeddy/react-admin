import React, { Component } from 'react';
import styled from 'styled-components';

class TOC extends Component {
    state = {}
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <h2>Ghostly Terms of Service</h2>
                    <ol>
                        <li>Terms
                            <ul>
                                <li>By accessing the website at <a href="#">http://ghostly.kitchen</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</li>
                            </ul>
                        </li>

                        <li>Use License
                            <ul>
                                <li>Permission is granted to temporarily download one copy of the materials (information or software) on Ghostly 's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</li>
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on Ghostly 's website;
                                remove any copyright or other proprietary notations from the materials; or
                        transfer the materials to another person or "mirror" the materials on any other server.</li>
                                <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Ghostly at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                            </ul>

                        </li>

                        <li>Disclaimer
                            <ul>
                                <li>The materials on Ghostly 's website are provided on an 'as is' basis. Ghostly makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                                <li>Further, Ghostly does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
                            </ul>
                        </li>

                        <li>Limitations
                            <ul>
                                <li>In no event shall Ghostly or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ghostly 's website, even if Ghostly or a Ghostly authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</li>
                            </ul>
                        </li>

                        <li>Accuracy of materials
                            <ul>
                                <li>The materials appearing on Ghostly 's website could include technical, typographical, or photographic errors. Ghostly does not warrant that any of the materials on its website are accurate, complete or current. Ghostly may make changes to the materials contained on its website at any time without notice. However Ghostly does not make any commitment to update the materials.</li>
                            </ul>
                        </li>

                        <li>Links
                            <ul>
                                <li>Ghostly has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ghostly of the site. Use of any such linked website is at the user's own risk.</li>
                            </ul>
                        </li>

                        <li>Modifications
                            <ul>
                                <li>Ghostly may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</li>
                            </ul>
                        </li>

                        <li>Governing Law
                            <ul>
                                <li>These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</li>
                            </ul>
                        </li>
                    </ol>

                 
                    
                </div>

            </Wrapper>
        );
    };
}

const Wrapper = styled.div`
    margin-top:100px;
    h2 {
        text-align: center;
    }
`;
export default TOC;