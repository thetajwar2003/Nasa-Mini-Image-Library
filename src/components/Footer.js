import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div class="bg-nasa_gray bg-opacity-75">
                <div class="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-nasa_gray-dark text-sm text-center sm:text-left">Icons Provided by —
                        <a href="https://icons8.com/" rel="noopener noreferrer " class="text-nasa_gray-dark ml-1 font-bold" target="_blank">Icons 8 </a>
                        and
                        <a href="https://heroicons.com/" rel="noopener noreferrer" class="text-nasa_gray-dark ml-1 font-bold" target="_blank">Hero Icons</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        {/* gmail */}
                        <a href="mailto:tajwarr.cs@gmail.com" target="_blank" rel="noopener noreferrer" class="ml-3 text-nasa_red">
                            <img alt="gmail" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2RkMzYxYyI+PHBhdGggZD0iTTEyMS44MzMzMywxNTAuNWgyMS41YzExLjgyNSwwIDIxLjUsLTkuNjc1IDIxLjUsLTIxLjV2LTU3LjkwNjY3bC00MywzMy41NHpNMTM5Ljc1LDIxLjVjLTUuNjYxNjcsMCAtMTEuMDM2NjcsMS44NjMzMyAtMTUuNDgsNS4zMDMzM2wtMi40MzY2NywxLjkzNXY1Ny43NjMzM2w0MywtMzMuNjExNjd2LTYuMzA2NjdjMCwtMTMuODMxNjcgLTExLjI1MTY3LC0yNS4wODMzMyAtMjUuMDgzMzMsLTI1LjA4MzMzek02NC41LDM5LjkxODMzdjU3Ljc2MzMzbDIxLjUsMTYuNzdsMjEuNSwtMTYuNzd2LTU3Ljc2MzMzbC0yMS41LDE2Ljc3ek03LjE2NjY3LDEyOWMwLDExLjgyNSA5LjY3NSwyMS41IDIxLjUsMjEuNWgyMS41di00NS44NjY2N2wtNDMsLTMzLjU0ek0zMi4yNSwyMS41Yy0xMy44MzE2NywwIC0yNS4wODMzMywxMS4yNTE2NyAtMjUuMDgzMzMsMjUuMDgzMzN2Ni4zMDY2N2w0MywzMy42MTE2N3YtNTcuNzYzMzNsLTIuNDM2NjcsLTEuOTM1Yy00LjQ0MzMzLC0zLjQ0IC05LjgxODMzLC01LjMwMzMzIC0xNS40OCwtNS4zMDMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
                        </a>

                        {/* linkedin */}
                        <a href="https://www.linkedin.com/in/tajwarrahman/" target="_blank" rel="noopener noreferrer" class="ml-3 text-nasa_blue">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-6 h-6" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>

                        {/* github */}
                        <a href="https://github.com/thetajwar2003" target="_blank" rel="noopener noreferrer" class="ml-3 text-nasa_gray-dark">
                            <img alt="github" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzMyM2E0NSI+PHBhdGggZD0iTTc4LjExNjY3LDE1LjA1Yy0zMi45NjY2NywzLjU4MzMzIC01OS40ODMzMywzMC4xIC02My4wNjY2Nyw2Mi4zNWMtMy41ODMzMywzMy42ODMzMyAxNS43NjY2Nyw2My43ODMzMyA0NS4xNSw3NS4yNWMyLjE1LDAuNzE2NjcgNC4zLC0wLjcxNjY3IDQuMywtMy41ODMzM3YtMTEuNDY2NjdjMCwwIC0yLjg2NjY3LDAuNzE2NjcgLTYuNDUsMC43MTY2N2MtMTAuMDMzMzMsMCAtMTQuMzMzMzMsLTguNiAtMTUuMDUsLTEzLjYxNjY3Yy0wLjcxNjY3LC0yLjg2NjY3IC0yLjE1LC01LjAxNjY3IC00LjMsLTcuMTY2NjdjLTIuMTUsLTAuNzE2NjcgLTIuODY2NjcsLTAuNzE2NjcgLTIuODY2NjcsLTEuNDMzMzNjMCwtMS40MzMzMyAyLjE1LC0xLjQzMzMzIDIuODY2NjcsLTEuNDMzMzNjNC4zLDAgNy44ODMzMyw1LjAxNjY3IDkuMzE2NjcsNy4xNjY2N2MzLjU4MzMzLDUuNzMzMzMgNy44ODMzMyw3LjE2NjY3IDEwLjAzMzMzLDcuMTY2NjdjMi44NjY2NywwIDUuMDE2NjcsLTAuNzE2NjcgNi40NSwtMS40MzMzM2MwLjcxNjY3LC01LjAxNjY3IDIuODY2NjcsLTEwLjAzMzMzIDcuMTY2NjcsLTEyLjljLTE2LjQ4MzMzLC0zLjU4MzMzIC0yOC42NjY2NywtMTIuOSAtMjguNjY2NjcsLTI4LjY2NjY3YzAsLTcuODgzMzMgMy41ODMzMywtMTUuNzY2NjcgOC42LC0yMS41Yy0wLjcxNjY3LC0xLjQzMzMzIC0xLjQzMzMzLC01LjAxNjY3IC0xLjQzMzMzLC0xMC4wMzMzM2MwLC0yLjg2NjY3IDAsLTcuMTY2NjcgMi4xNSwtMTEuNDY2NjdjMCwwIDEwLjAzMzMzLDAgMjAuMDY2NjcsOS4zMTY2N2MzLjU4MzMzLC0xLjQzMzMzIDguNiwtMi4xNSAxMy42MTY2NywtMi4xNWM1LjAxNjY3LDAgMTAuMDMzMzMsMC43MTY2NyAxNC4zMzMzMywyLjE1YzkuMzE2NjcsLTkuMzE2NjcgMjAuMDY2NjcsLTkuMzE2NjcgMjAuMDY2NjcsLTkuMzE2NjdjMS40MzMzMyw0LjMgMS40MzMzMyw4LjYgMS40MzMzMywxMS40NjY2N2MwLDUuNzMzMzMgLTAuNzE2NjcsOC42IC0xLjQzMzMzLDEwLjAzMzMzYzUuMDE2NjcsNS43MzMzMyA4LjYsMTIuOSA4LjYsMjEuNWMwLDE1Ljc2NjY3IC0xMi4xODMzMywyNS4wODMzMyAtMjguNjY2NjcsMjguNjY2NjdjNC4zLDMuNTgzMzMgNy4xNjY2NywxMC4wMzMzMyA3LjE2NjY3LDE2LjQ4MzMzdjE4LjYzMzMzYzAsMi4xNSAyLjE1LDQuMyA1LjAxNjY3LDMuNTgzMzNjMjYuNTE2NjcsLTEwLjc1IDQ1LjE1LC0zNi41NSA0NS4xNSwtNjYuNjVjMCwtNDMgLTM2LjU1LC03Ni42ODMzMyAtNzkuNTUsLTcxLjY2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
