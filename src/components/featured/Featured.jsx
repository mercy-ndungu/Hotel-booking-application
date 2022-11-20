import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt="vacation one"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nanyuki</h1>
          <h2>Chaka Ranch</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm76A2xFCqprcr41KMZdwBmLfjrrs714HLiw&usqp=CAU"
          alt="vacatio two"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nyahururu</h1>
          <h2>Thompson Falls</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcVFRUYGBcZGSAaGhoaGiMdHBoaGRocHBwdIB8jICsjGhwoHRwaJDYmKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHRERHTEoISg2MTExMTExOTEzMTExMTExMTExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEoQAAIBAgQDBQUEBgcGBgMBAAECEQADBBIhMQVBURMiYXGBBjKRobFCUsHRFCNysuHwBzNigpKi8RYkQ1Nz0hU0g6OzwmTT4iX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAwEQACAgEDAQYGAgEFAAAAAAAAAQIRAxIhMUEEEzJRcZEiYYGhwfBCsRQFUtHh8f/aAAwDAQACEQMRAD8A827VYIyZtTOsfLmKxbsbWVHn/pTSz7PXTqXQDzZvxFQ8Q4G6sAIYkFpCgAwRIAJOuo6DWuOOSDdJnoAP6SwMgIukRpqDvpzrrEO51mB03Ovpt5014dwi25jOxIUE/ZIJJBBESu1T4zhVhCgnKS2pZydMpPMxExSvJG6/BrK89wkak+o+gMAfCajLg6FmOvWT9T8Keh7FtHTJbclSFZAGMkGNRJifUeI1ojGG1cdR2bMsNtbIO6bSB4/Hxpu8roDkrrWCdDr01mR8P9Kkw9tNmGVttSdfhoaPfhlwf1aPl3KvlHwIYmfSlxfdSFmeYJ8OnhRu1sxlQVcwo95Yjo4kevMef8njDOkwyANOggAeh51wismoIPgd/ST9a6tENIOp3Kv3fh/H40OVux/QmxCgnumG5ZNf8XKtWbxEZgFJ+1uD68j51wuZNFMgfZ2I8j0rqxeUiCQDzB1O/Sla2rkPUldAwhhmHjpHl0qIFk2Jden2h/3VDefKZSSPunb06eVdtf6mPAfwoKL9UZtBCXkddIg8tz+YPjQd+wJlJB+vp9r6+dF4fhl25cKrabtADIbQ6CdV56a1Jb4a7TrMDM0d0BZAmd+YG/OimoPZiSkmtxamIaIOnIcv413+jMyloOUaSYUSdgJMk8/nTd+FgqpUwZaXPuhRlyknmfeEe93akv8AELa4VrQQi40LJ1GUEMxB6seWhgAfZFMpK9hHJgNzgly2SrwhVQx1GWCY97lrA8/SuTg1VAWKSZMznYKDGgBMkkHoNBtTHC5e1fD5mtWrvZ5iyln/AFazkAHMuTy3HpTC01m0j2Lih80KmVFN1BEy7N3UaS0KJInlQbYtsD4jZuYcW0hSr21cMyKzQRtBWFj1PjyrnDYlpBy255Hskkf5frRamxfVUF66rIMtvtlUoB92U1UeJBiicPwS4Nc9qPvdqsfn8qlJtsAc122cMGa4zXSAZ7Rs4aTmETCIBXXDMOuJaHzBwJZ1iHUQO90flm585ioMLwe493szCwuYtoRlOxBG/hB19DTPGX7eGttbtGbh0ZtyPM9egG31HzfBvQS+0uHRLgbCsVuKe8FMIxClOc/rMrMM3jXPAMOlyWWdDDZwQwbnmndttZNT8OtSwkTBmOvhTrswqEjQBgAvQM8R6D6DlSZMrapDJEeUCByXUac9RPzPxPWub5L5Ngq6xuSYIBPIDUmNdY10qZhUN1RBgkGREc9YM+hNckZuTodxSOL1xEUtccKB8STsANySdIHWtgMRA18P52+VRdmucllB7vcYiSrCZ13Egr4d07c5LblTP8xTbKvua+SHMddIgwQdwelcXFGsjl1/h/HSpbiyzMPtEGPJVX12qNt9aDemW3BuhxL/APMb/J/+usrWQ9fmPzrKbvZ+YNMRP2V5BpcleiW9VHhmJkfPzrlLHaOn624wKtrmAjVfugR/CnC4G6d7wH/TtgfvFq0nA7clme4zHc5ys/4MvQVbWur9kAX3uB2zJ2Y/aZmaY6y2ooNexS4qFbSsDrlCwRGhkePI61Y14TZ3NtWPVu8f800VbsqvuqF8gB9K3e7btswnuPbcZQtxx/ZttHoYA+dAMtxHDG05RQRmaJ72XdVJMDL058qtMVorSKddBhPhrKXRmzi4Og93yj/umoLuBt3XdXQEQAPDTl0pniuGo5zCUf76aH15N6g0sezetMxeXQ7tbHfgCNVM9Ps6+VMnfDAJOKcGNrW2+afsH3v7vM0na7m3EeJOvpV+wjWyCbZHj96f7U6z50hxqD/dwLYYnQLEZicsDTx5VfHkfEuQOTSE2HR2gQzgmFnu67aEkdRRl7gl5RmdAoWZBZC46wubMf8ADPhTW40yqNkcLmRihXulQGI3ZSVSfCY071F20jIe7CItrVAUfLFydyQYIJMfDWquVA1sULw22qJ773GKsNVe2VLZCIU6sW0jTcTrTvhODAY5VtkMfcYHKgJOkAk7xEmdPWi14ccRvbFu5oe1Ripchi4JAOVlnnyjQiKd8JsMko9m0gXY2ye8TuYPumeRJ33qM8iS5NVglrhKDLqZ+82pA5AeSwPGsfhiE6jpJjfnsNDr9KdXLeU+BEg8yPLehlBIIIgkdesRHz15Za5nOV0xqRXsXwpiYOoAMSIWQNhyWait8CtupJOYKpNxRBGxIg8tokZtTyqy4iwGHgdPWeXxFJsZhIaBIM7ERvuND1qmPJ5gaKxj7dyy5QOAhBLZTmuBR/w2uwCQAMsDTbepC1rt86W2ZCwdEaQXZolZEmA8gR+dMb9tcryuZysJOyk+8SOZiQB40ZwzCW+xfEsWU2vcGaUtm0FZVg6wznRRyMVbXqEYqxdkm+821tEe9bUghQFBnu9RR+O4f2LBZmVDT58qDTB3kdbl2QbstqRmIPvSJkaGj8V2YVArMzBQGJ2ECAqyJgbVOXAUO+DXf91uMPfRWQHnCguvwzn4VWl3qw+xjkm6u6934nMPmPpS/BcNa4WKABFJGYmBAPz0rStpUZbWTcPtGNNyRymQJ26Gcp9DR1wqNDqwPurqRodzsv18KGt4hA3Z22nuybgMZtYheYHOefIxvMO5JAGWIM6RrIM7czp476VKSWqmMnsYM7aLC+Agn/E2/oBUSu2bLnYGGO/3YkfP5VkBiArrM6ZXGb0gzUOKzIpbI2kEBiDJJOYk6gCJJINaC9V/RmSgsdMwJgnvKOUfdy9edcsSTEAH4g+W3w+tbNoyYJzCYMn6bR4VtFzEysgr/haRofHUeWU0ySaBwRXs1tC5uC2o3LAEHpA3noOfQ0MqHcszE6ktv8Nl8gBUt62jPMB8n2jrlbXQE6SBGu+utQ3sYk5VS4zzEZCqjxLkZY8ifAUZxbjSMn1N1lbit1y0PYcorsCpAldhKpQtkOWtBaIyVmSjRrB8tZFT9nWFKFGIMtaZaIyVyVrGFXEOHo/eIhxsy6N5SNx4HSq9xPBPa7PMVZRmIdgSRlAgECViYG3PbnVxuiKQ+0LmUysQRmIgE5oykqY2GWT6RzqmKb1UB8Ans0LYYvfuEqV7oljLkvpI2I7/AITcmmXBrIz22VkDJBJBgd1M7MwjvGSFJBkmlOGtMnvOywFjOpyhWaBKic2UkmPM61YODvaukhWIYNpnJylIBBA2BMaAgbmrtijjh9tUUQTG+o2nfTUbGiLCGWIJYncxHrGuvj8hXdmzKzA3gDXX56V0rARALHk2kAmdVB0OgOsfHeoRuXPA/BgXKO9sdcvMnqNdNeZ0qMlZM2tdB72vMjlG5PqakuodeuhJLeoMwdo+VYVkmYnYjl/Ea0s3pWy9wo4fDhwYMjYg7rPX8x40vxaSyEjcr9R1pur5fdADbZj4wYidag4hh0uLq62m55vd6yD+H8kxinx7Ab8yoOhjUa0BjsPP87+dXC/w2yxzHE2wzRMQQW5kd7mdY6k1DiPZl57lxG02MqY8tafRJCuSZXrnES1h8xJvPcEsd1RACoHQZp0HjROFwF2+020OVgGzHRRm1InnBkadKhfhFwXRbZSrMYE7a8xyIqye0GLGFtW7No5TGh5hRuf2mPPzp+U3IHoT4O3bwdrLccZm1MbsfAbwBpUeB41auAQwtZWIyECWWDlygbjnpO0VWVYO69oWKse/GrMACT3t+g9aMwJVsm6Ncu5coM5EMZATuxMgTOpoxn5AaDQwYZeztqskhQonwzHWDG8a9NKzKO0ddD2ZAB5CUViI2XUzpyIrq2hUlTuDU1oAFWgQWJPjBKz6EA+lQnJu0xkQu6fbuIvQMwE+h38q4sZhIVYDbFW+qEFT5+MeNTkVxattHdzDcAj9oj5QBFJCVPYZox85kLlW51I+zzKr98aaHTn1FcW8OAoUAwFCjrAEb7msdGVZZmldcx1YHy/DQRNd4hO0TMNvtKOR3iQfdOh8j6VZO16C8HATZeWw8DyHkduutLrL3Lapbe32ggBmBAZWkyYO689NRqI2pxhrJJDR3QZ842qO7bRNbjgk8tpPOBufIVo6mtl7mdAfZzyPwrKkbHXPsooXlJ1jxispO7h5jW/IcrarvsqZDC1prMU+gnqF3ZVnZUeLVbFqg4msX9lWjbo+4gAkwB1NL7+LGy6+PKkk0hlbOHSN6Eu3Ry+NdXGLanWuCtRc7HSBrpJ3qt+1bsvZspIIYwR6VaXSq77VWwQgObdoyie9AgETt5fA0+F/GgS4OcAihLecMFbI7hBOn6xSRocpIyiZkm4diIFj4Vw82bwQMjRbDkhQADrppy5+OYVWuFd59CozKbQVV0LZMsyYzaaySCCRrFXD2fQKoYSrMIj3i8swmY7w7sSSAIIB5nre9ijS3MGQG3n1JkHoN/gPIbZcw1AHISCQoggmdACZI+G9FLbB5QD7xJMagyNtjpr4ipETSWaWO8fSBJgetTukbkEtICCQQd5HSNI8IA938ZrBbjl19Z1P5+lGokcyBtvH8P58a26TqIOvLrQktXAU6AmQaQCfEbc5BB1nbahccxhoUMWnTn00jpoPwo/PG4jmTyIjUftDkfnS3j4KqqgxmBkDbukD15fCio9QWKmIRTluZWjcCSW+4GGgA3zDedJihMTZtm8GVjbtZQ7OJLq3PLu3vQM2oBO+wovFqCMxkZyQFVRqRElRm2kgf3opRxbD3Eu5grd1VM5dhlCkEctZEHQz0OrAZZ+AcTN6AWDiWgnS4ApEFgO6ZBGoj1qHjHGUS61q7azW9NdzqAZynxnY8qRcHxDJiM65MqhjlDBe6SMwgmSw088o5U943w5cUq3bTAtEeDDp/ZYGfofCttrYXawLE8Ht3bXaYY5l+4ddRrAnUN4Gl9rD22tE5wHVodSYMe8HH2hHh93TUVL7K2r1nE5TbuKjAh5U5dASpnaZ0mftGi+P8PYXi9u2WDCTAnUyGHrv61NpVqSGvoR4F2uNlUSepOsdWOon+ZO9MrdibcLqyMwYc9WLR5wR8aql83RcBW41oAd5VEE/HX40bgccyHusVO3UEDkQd+fjqaX4evU243MRGuYEyCOu3y/GobthZOYBo0EiYHhO3XzJo7CuuItnMAGBKkr5AyPQgwaXXL4JJ6mp5IaVt1Gi75NFBuRtsw3AMyNNSNB8QNhWsHdhgwkDMEEiM1skKCRygkkc48zWX8SC0jaIyjoJM8tZMetQPiUYEK/eHIgjKQdJ06wfHlWTcXa3+YdmhnxJjAEkDnGk0uyAbADyFMEuLetgjn8mG49DIpXduwSOY0NHPGTd9AQaokrKH7U+PwNZUe6kHUi1f7X2v+VdH+E/iKxfamwd0uj0X/urw67g8Qh1S6p8QwrlhfUhT2oYiQpzAkciBuRv8K9PuH/u+xGvke72vaPDnlc/wj/urMXx63H6pSSebCAPTc14lYtY0+4uJP7Ic/Spj+nrv+lDzFz8aR9nm14l7BuK6HqF6+9wy7T9B5CtqteVLxPGAx2t4EbiTI9K7/8AHMaP+Nc9f9Ki+wyf8h+8Xkeqhamt4Rz9mPPSqv8A0f8Atl31w+J1ZjCXQveljorgeOzD1616LcWoz7O4OmHXYm/QRzPwpRx/DwbQQhGNzKGOmXMMsk8t96s91arntancT9r8KWKSYbsXcPwqgI5XuZgFkHIUG4MAz34Y6arm6invAcPbtm21x2zyAysZOUKpMfdt6kDwykaHRVwMBtboZgFhQBMhB3k8MyaTvtTfhtnPcIgvKBeQLdnbBUKdNe4qt1CmumDQskWThrk2rbk+8NtzMd4+U0W+aSEjUAEztprEabdTy2NLOFWwXCK6yLQII1ylspfY5QMx/wAoOwE5d4nbtWgbjqi5TJZoETlgsTvofjVNNbonYbcUbjoIHMSIA85n+RUZQaMNNNCN4/LwNU3jv9IOHs6WAL7liTlJVNZM58ve0IGk0o4b/SWr3Mt612a5gQ6sXCx95QstsNR8KHcOW5taLzxTEQhICt3svMaxOoB1+VLhbbE84uqP7rr16K23gdKhwnGsJe0tsl2Ne85Daxr2YgrsOtTDHOTlUKq8kykKx2gkd478yfLlQ070w35ED8G1Ja/btssTrJXXSTIjU/GucJwUQ4/SwwcGWVoYE765zmDaBgd4XmKX4+1PdVVAugXVCk7hmSNeUZzH+gr3FMXYtwCwEDWdSW1khRqBsKZKuEYsr+xuoPbf+3//AFTjC2bWFtkBsq7sztufpPgK8oue0rJ/VZ18cxX5KdfU0t4rxq/iGDXLjGAAADAEeX13NVjiflQkpo9bve09gbF3/ZU//aKmwntBYuGO0Cno/dM+uh9DXjeH4rdQ+9nHRtfnvT7gXtFhgSMRbJmAOaD7xMd7Y6aH6Gi8c0ZSiepYm0lwQ6hh4jb8qVYrgFs622ZD094fPX51WOHe0ItXGFl+0shjCE65P7M6qR46GNtZq7WL4ZVaCAwBhhBE9RyNT0J8oa6B+G4bsLTByCZLEjaIj91RVVGIMa1bsdb7RGSYzCJFUnGWTbYo2hH8yPCpZI1Q0Qy5dHfKkZUYDU6sCB3gOYzEjy1qFsUKXlqZ8D4Ubpzv/VjYfeP/AG1NQt7IYZ+zxaHJEIYIPVtjHhAX4UwuIhbMVBPWKkyx5Uq41xe3h9GlnOyDfzP3RXSo0qEGWesqlYj2nvBjAtjwykx6yJrKJiX2nVbFxERng2w2bcNLuAToYlQDpAqNk7TG8PmdcNabTeQLjfUVYPbbCobiZQIFoGefdFw7mT73jzpNh/8Az/Dcpj/dLUE9cl3X40+OSba8iknJyVvyG5s5eIIiqcpw/aZWGaXLKJhhruatljG3ra6EWwBJPZooAHMnLpSXDA/+NWQTJFi3qP8AqW69I45rh7uv/DuD/I1HQ5PZtCZp1LdWeUezeNtpx3E3DdRUZLkXC4CsGZCIaYMjUV6QMUHUMtwMp2ZXkH1BivNf6NQP/FpgEfowMf8Ap2a9b4GP1bRp+tu6f+q9No1dSUmkJbl0E+8D6zUBuAzGsaGBsfHpsfhVjtkduAP+Wf3x+dLMWvdf/qP/API351DJgqLlYYzt0JcXfClVI1YmPQSdqrntcWyptGf8DVpxDgCSaqPtTilIQSPf/A1w9ToRrgNy0cyPcRQw07yxI1gmZUEaaDpTOxiEygdrDiWLBgf1gLBNZkKATt9408/oqKfoNqVX3rmsD/mNVk4DBttAH9dfG3S/cFd+Ps6a5IzyU+Dy/jPbFmsrjrVtwZRLVgm46N3Qc2cnKB+VIb/sVevXGBxedkUGbltw0HkA7TvPoJqL+lFinErZVipKLqCRvdudKu+CQhwSSSbe/ll/OnbcVsHSmea/7P2yXCYtHZGgr2ZHMjXv6GRtUnD/AGLa6jsLwGRsrDsyYkkAzm2MfMUNgLjDiN62GIVr1zMABrkZyBqNNelXzgBym7oD317p5wbm45iQPlTTk4iKCZRbPsuHd0S+zNbbK2Ww5gjxDRTWzhsZhsp/SLuQMAua0xGdoURmJjlsRT32G/8AMYz/AKv4Uy9sv6hf+ra/+Vam8kroKiil8R4Xjbu7OBEQEyx/nn50o/2dYFs1xVIBJ7hJzDlvvP4mvVLtVO5fFu+7lA8M0KwlcxmCRzAJmPCm1uNGUVIquI9mXUse1VlD5AwB7x11HhAHxoe9wYorMXByqTAWNgec1fuK4e3ncBslornUnX3mRQQOY0n9kmqvitbb/sN+6aHey1JA7tUVfsiEzk6SBETuDr8tqJwmAV0V85g3OzjLt3c070snSnvCv/LjwxA/cq+RtKxYxTZzi+FpbKnOzDMAYEGNSY8dNK9C4bgblu2HsYl7wiVW6wZGB6MBmU9NY6iqVxpSVBJ3YfEg/wCnpTz2Av3BcNtQWtHVuls9R5nSOe/I1FTbW7Gca4LwkEAwykiYMSPDppQHGeFpfXQxcA7rb+h6imPZ1tbVbZg3PPPZ7A3r97LcGRUgv3YmdgJ3mDr0q+rbAEDQbQNqj4fbOUeQog26CSM2wDi2MWxaa42sbD7zHYfH5TXmd+6XdnYyzEk+ZNOva/iRvXcin9XbJA/tNsW/AfxoX2YS2cRbFyMuvvRBaDAM6HXl1ilbsZbC+tV6ctljulvptyGg5dIrK1BEXtNxfC38RbbPZNpUE2zcYZjmJILrMA6azzNIsTxKx+mYMi4vZ28OiOwLAKQLkrI72mYCRSkcLTU5TtrqYB+MzUT4S0sA+9uRJ/nXrXTHSroVyk3Zc/ab2sw2W02G7NLqEoXt5w7W1CMpLlQ3vg6SdqVH2wuMpY4m6X5gtcKkRGusbdQZpFYw1tpyqCQDO+nTT8amtYNPuqSBqPp5DfWhLS31B8RafYH2gw1nHdtdOVOxCaKzQwS2I2ndTrFeiYH+kDAW0b9Y5l3YAW22Zyw38DXjNi0kQAoPkJmdwOQ8qLRUiQB02+PL0keNMpquAOLfJ63w72+wV3EKtvtMzxaEqIzM4A+1tTrF95G/6j/K4RXXs8tt1suirBsDUKBqCoPLeQaX+0nFhh1JKZhnfMZ1UZxED7W/UVsquDQIeJFW9t8PeKgoQLa99zJlsoLFYH2coJJ56DrXnGLxLBkYtmlix1mNWEHpsPjV94rxoY23dRUKhAGDlveEwe6NtCR7zAzVW47i1thbYtpAB0KBmOYmSX94wdBrpyrjxY/h3R7GPsynic7pFj9keIX7VtbdvEKEEkA2lb3iWOszuauPCGxSKct9CGZn1tc7jlz9vqxrxT2ex7Wrw17pA0r2n2dxOdBRTlGVWcGSFbM81/pYtk8StdRZRj6XbhNeg9n3rcc7RPLrbHKql/SPwoYjiK98qyYdGAjRv1t3nPWrfgu81s9bTfAmzFXe8SfQ8hwi/wD+vcH/AORdGnm/UirpwNma5fkRDQPEC5dAPhNUnDGOL3PC/e+RuVf+Dgdpe13AP/uXq2VbATF+Ew9/D379y21orcfNDBpHwrnjWLxN5MjdkBmVpGbdGDD6Ux4rcyLMTLAARJJPQc+tKsTfOZVynvTyiIG/lrHqKlpb3GtHN7jGK+7Z/wA1L711mOZozEyY2k7x4URidATQly0xEgaRPpStNh2RNjMUjWlUTmUjU7mVggH7ohQAfPmaW327rT90/MHpWXGqC7cgHyNBLdGfBVysR5fjFO+FkjDz0vg/5YpF0p1w9v8AdW8Ly/MV15fCvVEY8hnESXUQBIYHppVy9g7D28OWYCLj5lgjYALr6g1UMLYa6SEExr84q4ezWMNqwtq6CGDQsAmQxkbbatHwrmjdUUZYe3P3fmPzra4g/dPxH51Cz1GbtYBLhXZRGX5ik3tB7TLaD21Vu1giIgKSNDJ3GsiJmmq36qvt7ZkJdA1EqxHQ6qT4AyP71GzFVN09DXIuSdiKja5XHaVqNYxt3hGpM89TWqX56yjQbCsPdy3GUfsyDoQRp4aT9aC4s6yvdO0TOh5yDz3oy9YMznHuKdF5kbRPKhsTaLe++aAI0AiWiPmTXQuSb4I8DiFBhVMnQyfyFF27pK7KBGm8xzPh5mgOwAIifHy2qcWxlUgn3TInSczfhlrSoys6TFHMdD0A8uXxptauCIO8j8Y9d9vypRbwoAJ5+dN+GYW5cYKpgTJJ2FK99kFbHrv9HvEybX6y6k20Acs47pkpqdR7ttOnM1XPbO/culzhbpu+9PZXWdUVGkMBnyqTrIk6BavPsnwO2lm0l21bd0tKWYopJZ2LakiSQAPjQGMsw15oCIuYKoUCQ9supnkCWVYAGoir7VTEvc8m4QlxizX8WLIKEqbrFg5AaQMr6NIA1110BqfiHCTicWVtYmzcBdEQoxYEOywTC6AFzPkaud8G1ZtBSHtqt9NRJy3GbK2mp0Obbc8hswxvEoW6BEK+cAc4y3B4bgj0pXFF4ZZqLinsVex/RbfDhmxFnT7uf8Ur0rgnDLdhINzYakkQIG8wKR2sVnOjVvFEXWSxmBDd+4J/4anRT+28COah6RwV3ROU5SdtiD2xtdrjkxeHuWrlm3ZC3YfvQWdpC/aWDIPODFEcF42joGW4n6u2wYKj3CQWVoBQEZgqncRoOs1x7bqHZQWIZv1R1I/VHvXP3VAPIv41vAlFK3FAUwUZVEAoQcqmPuhBHm3U0GjWyh2LVy9j2aTctNddgUO6MXKnu94SNeulGcFAnvknOzAS7Ans8xYRJnV7fLr41Pc4gUuBiyoqEoWI5jSeg2Mee1LuCX7TkqTbbvMypc1zZnYkD+6F5HYUXwKOP01Xe3bVcq2y5MiNZyrpryZp8p51Koa5cdgpIQBZAJ1bvMNPAJ8aV4VrYxLlVChrakqpKwwJB0UgdKNw2J7G4wtnKrjNA+8ujHzIK/4am/IZGYtGG6kehqHCYoKgBKiCV1PTb5Gj34vc+/8AOkmKuPcvNcFwDQIe7M8zzEfZH92ljsMwC/d1IEE69Tt5DTlVs4JaVsPbJBns9e82+QeNVi2WFw5ShDCJZRPcPkebGmHBfaK1bw6LczgiZ7vhy67imjHyFbAf6Q7CgWyAdzzJ3VTzpNhLgGGYTr2qkDnoBJpn7X8VtX7dvs8xIYEyI0ywfw+NDC2hBCW1C92e8ZkFjIJnw+FNLhJmjyM/Zu4AHaRrGvkD/wBwqwYC8r3UCsDBLGDOgBj55aqFtWClU0HaKDMHchh0JG2ngaacPxdyzfFx8rZkNuQpB3zjmZ2ap6Ug3ZdWah7j1W+M8UuXVCrcNoc4Bk+syB5VHwri7W1K3H7T7rbN5HrSUOWZbm9QvdpE/tBlzHs9NToQdB5kaxQdni9zPnAdrba5GyCAfuwZB8DR0i2HcV4LbuglALb9VGh8x+WtVN8I1u7kcQRr4EciOoq2X+KrmRVYDNJJYHuhR00kkkDfrSXjuKz3I7pyjRhpObkRJ2I+dNGzSoE7Jayou0rKwBoMDcbZGbyUnTl8orLvBbp/4bjzEfWKuFzhy/av3G/uP9WIFCXcPhV95mJ8Wtr/APZj8qqoy6IzlHzKuvB3E5ignq6zHT3q6/8AC4Edog9WO/kpp2+MwamIUnxusf3bYHzqM8Uw4jLaTr7jt+9cH0o6J+QuuHmLUwCc7kzvCn8Yp7wYIpVVJieY0jx1NADjyEwqAEcglsH91iPjWf7Rt4qRsCfygfKnj2ecuK9yc+0QjzfsezcMxwJC9ukso91NSVGXm51gDlSP2uvupcBrupEyqqpiCNYG2UfCk/8AR7xD9IuMj3XRRbzHI4TvZwAJAnUE8+VRe39s2nIQO8M2Yvce4QFCxILc83yqiwSb0t7ku/SWpLYTXMVc27SB4NP0mh3xeUybnyP4xQNi27sC+0aAbz4hiIFAcQ4Qe13ImDzAiBzgj50y7DJypOwLt0VG2qLnwPiSkjI4nxBj4qCKccHxTE3Ge2lx7jarntkqi6IuVoO0sfF261x/RlhbeSCROYjly5yDznw2q2+z2DQB7DAMLbZUkA5rQ0SZmSIKE88s7mklhlC0+g8c8ZpNdTzjiLZrjuLYUZgiAwMqqGzQOrPO24RelbUwmuhLD915+ZHxoriXD27Z17ZRluQQ0xANzWMpXMREmfs8qjxjplhEGYEBjnVg2jagKqkbdedWfYcmnUmjnX+p4XPRvYnvYdCTK7nrv8Zoe3gbamQMp8h+VDXeOKrspt3AASMy3N4P3XBrqzxq0d3df27an5grXJPFOPKO2OWEup0+E72YPrEfH/So2sNO4MUVaxdlz3XtH+8yn5qR86mWyG2BP7LI3ymflUZRa5KproLWDj+BoZc6jY7knTmTP402vYUc2YftW2HziKEOFB917ZPg8GkGoT3bhAWNxp8dz8YNLLmaICTI3ncFR+OvpVnfBXRyb4hhQ7Wrg3RT52x+Ap4yoRxsr15mKwUg6QetG4e6cp03I+Q/OaLZR9q2noWH41tVSPcYeTT9VrSla4Mo0D2r5Dg67if7uaPrTO7fzKOoZSPjr8pFCpbTqw8wD+NF2bI0hgfQih6BJr4BFQIgFElPKuGSlHBMUFCNPSB5nQDzml9gEqIUmND5rofnNG4pSGDbgA6ePXzj8etAjDiQdu7rBIluunrTpbbk3d7HF0PMxGkfz8KEe8ZiSTRJaGPecbR3ifrQzXNB5k/EmnSF3Ndq/Q/EVlazmt0foEc3XbMSwPhoT9BFBkMWEd4/dG/1qw8UweR+6co1GU7kqxG5JkHkelZxK4qDBEyhFswFPTEXSNh9dByrucm0cGmnuIrGDJb7cnkUYDX+7r50aeE3gxXsmkDWSIAIkTrO1NrouXL1ogdrC5QBEzEe8W0p+eEX1tlypkfYDq5knohJ8dajKclwW7pW0U3DcLuNeSwyjPzESBpm1jw8DT7h/saGt5rtxrb6/q1XQQTlkq2s77bVFYfLxQM4g7ExGX9TqDJ6/hVqu4kHZgfUfhS5MslWwsIJdRZwDg6Ydg7Zu0nMApygANKhsrLm2npJ2NMeI443muF7amXnYcwm86jVCaHu4jUTJjw0oVr4hhM+WvyNJ3jl1KbJVRu5eXkBmHIa+kUq4zpDjKGOh1ynw2Boy7d7gBEaxvE/HnS7jQAUAQkka676+Yq+LLli7W5DJixzVPYO4FxJ0OVbjqAMxIY5ZkASQRvtTWz7Q3xcFxHU99wAzCSO6XUkg79w6mZQCY3pfCz+sKM0AySw945ZHIDn48qOwR/WrbckqWQHpo2VoMyddJEVaWeTduPuJDs8Iqk39AniGPa/cu3kJZQMz6FTqdYXcwWI93rUOHvqbjohJlA4zQNACfDTU0ZhrYd1tghUu/rJ1ziM0Kfsx3YI9aCuYHK0gn3mDGBBZTygSQR1+dLLtU3HTaSDHsuNS1VbKzfvFncaqQSYg6wetS8KC3c4Ye6AZiY3kxrpz9KseJwtslu6CWie4JA3gNm8tulB2OHi2twCZdmUNrDKCuUEbrDA6ESZqMsmpbl4xUXskJEOW5dnTIw20gag7V1j7hKggHoTEbkGeXT51I2Dhi6Eyd402865xhuFIJGsfZnYzuKmUsMsYt1jKzL5Ej8RWHi10tHaBhP21DiB5j8RQJxB3yk+Rj6muFbK4MSv3cp1HPUetaKrlAb8hrd4j2YBe3ak693MhA8criDty2INE4XieZR/WCelzN+8hn40nxjgktk0UAQ3iABM+U+tS4IQqmTz2B8abRF8oGqSfI0xWPRYzXN/vWs37jA/KuP0i2RP+7kftNb/AHlgfGkfHWYhdokbjw8R40CLpyGJ3HX8KzwwaCskkW63h1ba23/purj5Ga6/RQp+2v7SEfhVWGIyKDz6HXn86O4VxBpAEjUbEifDf6Vv8ZdGD/IaVtD7s5+0DXFywwG0jwru3eYmJkeJDfUTWrhIOgHwP4UvcSY/fxTBexdpCqZgn4Ub2ARWQwwEtmKnMsplYkR9ltJ2zBd9gfwhDlJG5YDQn7J8tNDO/IeFSqrkSZA2G5DGI1I7wXvMJ8a48sZ6nFLZFoZcdJ3yVbi+Gi4SqLlhW90gKH2EmN48uUmKVXUUGDbH91v9autxFZGTKsnMDMwWnctB705xAnrodqzkRhItk+KMD9DTY3JpprgM3HoxZkt/db4j8qymP6On3bn+Gsp7FD715LpgBc/ULmA581AFc4+84FpSC+RSPsgCbjNPXWfSKluvbeArMPKV+URS7EM6sABoPtO+nwr1VDqeY8re39hti8VuBrMC7MjTP8NxV+9nfbt2y2r9l88GbltCQddP1ayQY5z6DaqZwfi2GtESoJ8Ah1823qw4j2+S2oW3YuMY09xVnxIkj4VGUX5Fo5VfPuQW1B46N2zMSwYEd3sN8p0GsakVYuJ+yKOxe25tsZJkCPSACPPWvOr/ABq817t8yW733gqkjl9onlWuIcRxrLN27edD9mIX1AIEUJYm+RY5lulux/xnDXcNo9xGnkX/AAKilpxkb90/2QfxFJ+G8JV5d0ymZAbUHz1+VNCLg1ZlgdFJ+VSeNLgop2SPiDGktPI6fhrQfEcQMqhmKmQIBOvyrlSlxz70+sfwrnGpc27kT40YRd2hZyVbkbOTJVtM0hdgCWPXXST40Xh0GjFuzuLCKJE5czN3hyMydPClNwozKGYgk/ZkgR1B8elN8MjaEKOcSxYnaJmOc1SSbBFpDPBWwEJzZ2R2ABgHLtHxqe29tE71xUmDLMDvO+tVnj2LuwUuNkDDZNZ16x+NLbKkJ3IYeLH6RSrC5cszzJdC34rEWspLOHHgZ3gfZk6QaBwOPtjPluZO9ID/AGxPPMPWq8VOU5gFHUHX6VHhCNQpzHoxj8KdYEnyL37q0v31LJiOzuEhbiMfu5gIjoZgjxoa3bygoQF1mdGkjkKUoGJgqoHUH+FcYZ1tvKuwblqYnzjWm7mupu+vp+Rli7dtgO8CSzGCMsAQV+U0GqsugBQL7rAjqTPjTW0125mL9mpIAEtH18J+ND3MDqAbgkSYUltD6aCRTrHXIjyXsgGQ5OZpMQByJG3L0rrBhl7uXKOoP860e+EuDVUSOpcD8q54hhSe+xyGOTSAee3X8aqsUehJ5H1F2JytAZwY5H84rFsFhlCBQTMqRH0o63cDABYYj7xhvpUuGsNcYBlIjUQ25qvcxe/77i9/JbP7/wDAtfCJszg+YH5Uw4Zw3LrHkQwIA/Ouy62yVzZjyzHryBij0uM6ZXSPJo/kVWOGDRDLnnH/AL/COGsQffHhWCzcmVE+KtRli8LZhnkEaA8qnOOaICAg/dYfyKvDBjXBxT7Tlfz+xzw/H9icriBuJ5czymTt6/B3hPaO41snRlRdAQPsEEg9RDHQ0itkJ3mY5easQd+VEPi1C/qwDpyI1LEZtDyhQNd65O19hhJ3FW21flsdODtco7N7JPf5sB4/xFGWUUq0mMv2ZgzlgrB1HI6DpVTvppsPXT/Sn2JwuYHQrPI60gxQIkAz60Hgjji0l+TqxZnkq3wE28GYE3I8M50+daqL9Obmn0rK5NH7R2aiw3+Fve1W5C8wDrNaw3DwgyEXT6fwiKO7W4hISyAOszPrIqVsScpFzuE6aNrr05g0zm274OZQVVygZuHWwvdQBztnAn8v9K4spbskl9SRtkMfE6Vo4Ts++2dzM92PrM1Ja4iWP9W/oNvpU22+SiUVwdWVsPqLYn9mPppUJa4DqURR8D+P0rePR3IyOVEarsR46anpHhUNvFJZGQszHplOnx5UrXmOn5ex1iGsvu3qCQPyqK8hSOyUMDzzE6+Ux61Ph71t5KBQ3isa/wA+NC5LuaXdVAO5IjxgfnQo1/rN5hli4wU/2Xj6GJoe5h0ylkZnI2Afc/z1oq/dsMZOU+MH6gVDjkhM1pUPMxqdtI6/wpklYrboFwFxy5JtxGmYbqJ6n3t+XhRqW7edct0kzqM3PlQmEVgD22WNdGiZ31PnFS4axZzQGWOmY/SfCmcbQFLfb7B/EYMK6F1EQW15eHPz6VG3Dbbrrnt6cm+FauvcDAKojlA96BGtTXbaFQbgCtEGGgb9fiYpFe9FHTptAJ4OyqSrl+UH+TQ2B4e7NlKhROpXl8RvTdbIUEpqd9948fKKgwuLZ2ylefKRlnn8qZykqF0J2cW+BANPauQOWmvh/IrXEbFu3B7PUHc8xHKi2wa8i3jr/DlUPEn7NNi3ixJAiP55cqKlIFJ/tC7Eu7QUuOvUbH5VAxZVJZmY+Ag/LWpjhxfkjOsnqYkb1CuANvUs0ajfTSumO/C/fQi3WzfHy/JDhsT2ndBKt1iR8aJs2mB1eRzBUUHdxYViMpHU7ExzqQWM0MHYT1/1FPGXTlr6GlHrwn9SV7623PdjqY+g6VMpdoZbmh2lYqM91DmLN4QKht4sOMpLKTppH+oqilWzE02rS+vIfnVBnZczDmBFEWcct2AjwehGtLbdlwf6xvhXb3+zYEAkndgOX50zdbvYk4J8bvp/4NcpPvFT6a0NaxMP2agg9Y367kchUVls5JDtMbH+Fd9mZMtPpG4g60dUq+H3JKEU6l7cEwF088wPVfAH6EfGprJyEEoSTtl0B0B5mBpPxob9PQaZ3ECPtb6ePif8J8CeRc2IuzvB7/QDTvacx5CuaXaMj2r+zqjghy+PoTu7vqp3iBG8xGuu8r8R1oLH4EnVlUHbTfr1on9JVSSW35jNuDA59I8qCxeKLn+sPrtMCdf52pVmnJ/EZYYw3gLrl0AkQdKyi+994VlHUylx/WXJvdb9k/umqt/D61lZXLl5RTFwy0W/dX9kfShOKuQjQSNudZWU8vCCPiE3CHPbDU6kzrvod+tWEICNQD5ietZWVPHwNm5IOKHLbOXTy0qHh39WtbrKK8Yr8JHcsJ2nur8BUfGO7b00767ac6ysp3wIvEgbiyDLsOfKlHCFBcSJ331rKyi+RoeFllse6vr/APWlONHeYctNKysqUupXGc2mIbQxpypvfO/lWVlaHhDPxCrEnv8AoaN4e5IMkn186yspIeMpl8BGPdP7P4VXhffN7zcuZrdZXRPlHNj4Y54ig7ug2XlQWPYhDBisrKv/ABZBeJepDw1yTqSfWpwP1v8AdP1FarKfH4Rp+N+hNimIAgxUuG1QTrWVlFckX4Drhf2vOu8Se/WVlF8In/Ng+MHdra7L5CtVlMvEOvCcr71RYpRI0rKyo5OCsOSSsrKysKf/2Q=="
          alt="vacation3"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Turkana</h1>
          <h2>Cantral Island</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;