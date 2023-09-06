let all_links = []

function prep_get_links_from_message(){
    // Call this before calling get_links_from_message to ensure that you are working witha n empty list
    all_links = []
}

function get_links_from_message(message){
    // Call this function after the one above to place all links from message into all_links global variable (array)
    // message is a String
    let message_length = message.length
    let link_start = message.search("http")
    if (link_start == -1){
        return
    }
    let message_substring = message.substring(link_start, message_length-1)
    let link_end = message_substring.search("\n")
    if (link_end == -1){
        return
    }
    let link = message_substring.substring(0, link_end)
    all_links.push(link)
    get_links_from_message(message_substring.substring(link_end, message_substring.length-1))
}
